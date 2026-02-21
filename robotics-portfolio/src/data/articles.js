export const articles = [
  {
    slug: 'pid-control-mobile-robots',
    title: 'PID Control in Mobile Robots: From Theory to Implementation',
    excerpt: 'A deep dive into tuning PID controllers for differential-drive robots. We cover Ziegler-Nichols, manual tuning strategies, and common pitfalls when dealing with real hardware noise.',
    date: '2024-11-15',
    readTime: '9 min read',
    tags: ['Control Systems', 'ROS2'],
    featured: true,
    content: `
## Introduction

PID controllers are the backbone of most real-world robotics control systems. Despite their apparent simplicity, tuning them well for mobile robots requires understanding both the theory and the physical quirks of your hardware.

In this article we will walk through a practical implementation on a differential-drive robot running ROS 2.

## The Math Behind PID

The PID output is defined as:

\`u(t) = Kp·e(t) + Ki·∫e(t)dt + Kd·de/dt\`

Where \`e(t)\` is the error between desired and actual state.

## Hardware Considerations

Real encoders introduce noise. Always apply a low-pass filter before feeding encoder readings into the derivative term — otherwise your \`Kd\` gain will amplify noise catastrophically.

\`\`\`python
def low_pass(prev, current, alpha=0.8):
    return alpha * prev + (1 - alpha) * current
\`\`\`

## Tuning Strategy

Start with Kp only, zero out Ki and Kd. Increase Kp until the system oscillates, then back off by 50%. Add Ki slowly to remove steady-state error, then finally add Kd to reduce overshoot.

## Conclusion

Good PID tuning is equal parts math and patience. With proper filtering and a systematic approach, you can achieve smooth, stable control even on noisy hardware.
    `,
  },
  {
    slug: 'ros2-nav2-custom-planner',
    title: 'Writing a Custom Global Planner Plugin for Nav2',
    excerpt: 'The Nav2 plugin architecture makes it surprisingly straightforward to swap in a custom path planner. Here is a step-by-step walkthrough using a potential field approach.',
    date: '2024-10-02',
    readTime: '12 min read',
    tags: ['ROS2', 'Navigation'],
    featured: false,
    content: `
## Why a Custom Planner?

Nav2 ships with solid planners like NavFn and Smac, but sometimes your environment or constraints demand something different — a risk-aware planner, a learned planner, or a domain-specific heuristic.

## Plugin Architecture

Nav2 uses a lifecycle-managed plugin system. Your planner must implement the \`nav2_core::GlobalPlanner\` interface.

\`\`\`cpp
class MyPlanner : public nav2_core::GlobalPlanner {
public:
  void configure(...) override;
  nav_msgs::msg::Path createPlan(...) override;
};
\`\`\`

## Potential Field Approach

Attractive potential pulls the robot toward the goal; repulsive potentials push it away from obstacles. The gradient of the combined field gives the motion direction at each cell.

## Registering the Plugin

Add your plugin to \`pluginlib_export_plugin.xml\` and set it in your Nav2 params YAML:

\`\`\`yaml
planner_server:
  ros__parameters:
    planner_plugin_types: ["my_pkg/MyPlanner"]
\`\`\`

## Wrapping Up

The Nav2 plugin system is well-designed. Once you understand the interface, you can iterate quickly on novel planning ideas without touching Nav2 internals.
    `,
  },
  {
    slug: 'embedded-motor-control',
    title: 'Embedded Motor Control on STM32 Without an RTOS',
    excerpt: 'Bare-metal motor control on STM32 using timer-based PWM, encoder interrupts, and a fixed time-step control loop — no RTOS required.',
    date: '2024-08-20',
    readTime: '7 min read',
    tags: ['Embedded', 'STM32'],
    featured: false,
    content: `
## Why Bare-Metal?

For low-latency control loops, a bare-metal approach can outperform RTOS-based systems by eliminating scheduler jitter. When your loop needs to run at exactly 1 kHz, determinism matters more than features.

## Timer Configuration

Configure TIM1 in PWM mode for motor drive and TIM2 in encoder interface mode for position feedback.

\`\`\`c
TIM1->PSC = 0;
TIM1->ARR = 8399; // 10 kHz PWM at 84 MHz
TIM1->CCMR1 |= TIM_CCMR1_OC1M_1 | TIM_CCMR1_OC1M_2;
\`\`\`

## The Control Loop

Use SysTick to trigger your control loop at a fixed interval. Keep ISRs short — just set a flag, then process in main.

## Conclusion

Bare-metal embedded control is demanding but rewarding. You gain full visibility into timing and can optimize every cycle.
    `,
  },
];