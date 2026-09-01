---
layout: page.njk
title: A risk-neutral economic scenario generator
lede: It calibrates itself to the market. It lives in the pricing measure.
permalink: /documents/economic-scenario-generator/
---

Most of the work in an economic scenario generator is not the simulation. It is the calibration. Someone sits with the model, twists mean-reversion speeds and volatilities, and stops when the output looks close enough. That is a research project every time the market moves.

This generator does not work that way. Feed it the market — yield curves, swaption volatilities, asset option prices — and it calibrates itself. No hand-fitting. No additional paid vendor contract to calibrate the model on your behalf. That is usually enough, on its own, to make it a lot cheaper than whatever is already in place.

And it is **risk-neutral**.

That is a stricter claim than it sounds. It is not a real-world generator with a market starting point. It is not “market consistent” in the sense that phrase is often used in insurance: aiming at traded prices while remaining in a real-world, or hybrid, measure. It lives in the pricing measure. Discounting is on the numeraire. Assets and rates are jointly arbitrage-free. Options and guarantees can be valued on the paths, not merely illustrated by them. That is what could enable genuine balance-sheet management: reducing risk and capital costs, not merely reporting them.

The engine is a cross-currency LIBOR market model, written in C++. It can run in the cloud or locally. Interest rates, inflation and asset returns are simulated together under a single domestic risk-neutral measure. Rate volatilities are stripped from the swaption market; asset volatilities are bootstrapped to quoted option prices. The relationships between markets are in the measure, not glued on afterwards. Much of the same functionality is also exposed in Python, which helps with product design and pricing.

If you are thinking about an economic scenario generator — building one, replacing one, or getting off a process that still needs a human in the calibration loop — this is the kind of thing I build.

[Get in touch](/contact/).
