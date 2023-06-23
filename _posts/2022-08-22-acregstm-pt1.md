---
layout: post
title: 3 Phase Firing System for TRIAC-SCR using STM32 Timers
date: 2022-08-23 00:00:00-0400
description: The Case and The Plan
tags: stm32 power-electronics PWM english
categories: power-electronics
comments: true
---

Thyristor (also known as SCR, a.k.a. Silicon Controlled Rectifier) and TRIAC are active electronics switching components mainly used in power electronics. We might be unaware of its existence in our household appliances. But when we take a closer look at our electronic appliances at home, we commonly find this component integrated into them. It was mostly used for dimming lights, controlling drill speeds, and other things. It is also used in industrial control systems too, such as induction motor speed control, power control, and many more. 

In this article, we are going to discuss how we can use this Thyristor to regulate a 3 phase AC input in bidirectional mode or unidirectional mode. I’m not going to explain all the theory behind the working principle of the thyristor and how an anti-parallel thyristor can act as a TRIAC (you can find it in other online articles).

# The Case
My power electronics professor asked me to help with his project about rebuilding the 3 phase firing circuit learning module at the power electronics lab. I was free at that time, so I took the challenge and was willing to help my professor rebuild it. 

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/2022-08-23-acregpt1/1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Analog firing circuit, was built in 2005.
</div>

# System Design
In order to generate trigger pulse with the references of zero-cross voltage from the voltage source, timer based pulse generator was implemented in our design. The input channel was feeded by zero-crossing detector circuit. The zero-crossing detector was designed to generate logic high when the input signal on positive side, and vice-versa. Operational Amplifier (OpAmp) was used to compare the input signal with the voltage references.
