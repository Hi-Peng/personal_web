---
layout: post
title: 3 Phase Firing System for TRIAC-SCR using STM32 Timers - Part One (en)
date: 2022-08-23 00:00:00-0400
description: The Case and The Plan
tags: stm32 power-electronics PWM english
categories: power-electronics
---

Thyristor (also known as SCR a.k.a Silicon Controlled Rectifier) and TRIAC are active electronics switching component mainly used in power electronics. We might be unaware about it existance in our household appliance. But when we take a closer look to our electronics appliance at home, we commonly found this component integrated to it. Mostly it was used for dimming light, controlling your drill speed, and many more. It also used in industrial control system too, such as induction motor speed control, power control, any many more.

In this article, we are going to discuss about how we can use this Thyristor to regulate a 3 phase AC input in bidirectional mode or unidirectional mode. I'm not going to explain all the theory behind the working princple of thyristor and how anti paralel thyristor can act as TRIAC (you can find it in other online articles).

# The Case
Last month, my power electronics professor ask me to help his project about rebuilding 3 phase firing circuit learning module at power electronics lab. I was free at that time, so I take the challenge and willing to help my professor to rebuild it. 

# The Plan
lorem ipsum kontol sit amet