---
title: Stellar Evolution (Single Star Context)
date: 2026-08-14
summary: Detailed notes on single star evolution from molecular cloud collapse to core helium burning.
category: sky
tags: ["astrophysics", "stellar-evolution", "notes"]
mathjax: true
---


### ISM

1. The gas and dust in the ISM are usually of 4–5 types. These different phases have varying \\(T\\) and density.
2. Molecular clouds among them have the more local concentration and highest density. That cloud can be stable or unstable depending on whether it satisfies Virial equilibrium.
3. If \\(\frac{1}{2} E_{\text{pot}} > E_{\text{kin}}\\), then gravity wins and this cloud collapses under self gravity.
4. A limiting factor is the Jeans mass (\\(M_J\\)). Simply speaking, if the \\(M\\) of a cloud is greater than its \\(M_J\\), then it will collapse. \\(M_J\\) is a concept—it depends on the temperature, density, and molecular weight (\\(\mu\\)) of the star. A higher temperature (higher \\(M_J\\)) means that clouds have to be massive in order to collapse.

---

### Molecular clouds

1. Molecular clouds collapse due to:
   * Passing through density waves in a spiral arm of a galaxy
   * Compression by a shockwave generated in a SN explosion nearby
   * Collision in merging galaxies
2. Then these clouds cool by emitting IR photons (by molecules and by dust).
3. Now the density has increased as the cloud has collapsed (isothermally, because of cooling), so the \\(M_J\\) of the cloud has fallen. Now the cloud will fragment in smaller pieces and collapse more. These are called clumps.
4. These clumps are undergoing free fall to collapse more. Finally at the end of the free fall phase, we have protostars.
5. What we must remember is that these stars are formed from one molecular cloud.

---

### Class 0/1 Protostars

1. The core density becomes optically thick (\\(\tau \gg 1\\)), trapping IR radiation. Isothermal collapse turns adiabatic (\\(T \uparrow\\)), halting free-fall and creating the First Hydrostatic Core. Surrounding material slams onto it through an accretion shock.
2. Heat is absorbed, driving a 2nd collapse to stellar dimensions (\\(R \sim \text{a few } R_\odot\\))—the true Protostar. Luminosity is dominated by accretion.

---

### Hayashi Track

1. The star is cool at the surface (\\(T_{\text{eff}} \approx 3,000 - 4,000\text{ K}\\)). High \\(\text{H}^-\\)-ion opacity traps radiation, forcing the entire star to become 100% convective.
2. \\(\text{H}^-\\)-opacity acts as a strict thermostat keeping \\(T_{\text{eff}} \approx \text{const}\\). As the star contracts under gravity (\\(R \downarrow\\)), its surface area drops, causing luminosity to plummet (\\(L \propto R^2 \downarrow\\)). It traces out a vertical downward path.

![haya](/images/musings/stellar_evolution/haya.png)

---

### Henyey Track

1. Gravitational contraction raises the central temperature to \\(T_{\text{core}} \sim 10^6\text{ K}\\), completely destroying \\(\text{H}^-\\)-ions. Opacity transitions to Kramer's opacity (\\(\kappa \propto \rho T^{-3.5}\\)). Because Kramer's opacity drops rapidly with rising temperature, radiation can suddenly carry heat efficiently. Convection stops at the center, and a radiative core forms (bounded by a thin convective envelope).
2. The star leaves the Hayashi limit and turns horizontally to the left on the H-R diagram. As heat leaks directly to the surface, \\(T_{\text{eff}} \uparrow\\) rapidly while \\(L \approx \text{const}\\).
3. When \\(T_{\text{core}}\\) hits \\(\sim 10^7\text{ K}\\), stable hydrogen fusion ignites (\\(\text{p-p}\\) chain or CNO cycle), halting contraction and establishing the Zero-Age Main Sequence.

* For stars with low mass, their internal temperature never gets high enough to lower Kramer's opacity. They remain fully convective all along, moving directly to ZAMS from the Hayashi track, spending very little time in the horizontal evolution of the Henyey track (T Tauri).
* For stars with intermediate mass, a good amount of time is spent in both the tracks.
* For high mass stars, the core heats up very quickly and becomes radiative, thus parting from the Hayashi track quickly and moving into the Henyey track (Herbig Ae-Be).
* T Tauri are of 4 types depending on their age and emission.

---

### More PMS Things

* As the star lands on ZAMS its heating source shifts from gravitational contraction to nuclear burning. This shift requires a non homologous rearrangement in the internal structure of the star.
* If the mass of the star is less than \\(0.08 \, M_\odot\\), it becomes a brown dwarf with a degenerate core, as such small mass cannot produce \\(T_c\\) high enough to start nuclear fusion.
* Before landing on ZAMS, some nuclear reaction happens: deuterium is destroyed, \\(^{12}\text{C}\\) is converted to \\(^{13}\text{N}\\) (yes the temperature even in this contraction phase is enough to change C to N because of such high abundance of C—don't have to wait for CNO temperature for this initial change). These things halt the contraction temporarily and cause a little wiggle in the Henyey tracks at the end of the PMS, right before ZAMS hits.
* The PMS evolution runs on KH timescale—massive stars finish their PMS evolution much quickly.
* We still call that thing protostar until it has landed on ZAMS.

---

### Central Hydrogen Burning: Main Sequence

* Hydrogen changes to Helium in the core \\(\Rightarrow \mu\\) increases in the core.
* \\(L \propto \mu^7 M^3\\), so \\(L\\) increases in MS.
* \\(L\\) rises and hydrogen abundance decreases, so temperature at core (\\(T_c\\)) must increase to keep up with the energy production of the core. But \\(T_c\\) does not increase enough as to what is required.
* We know from ideal gas, \\(P_c / \rho_c = T_c / \mu\\). So with \\(T_c\\) staying almost constant and \\(\mu\\) rising, the ratio falls. So either \\(\rho_c\\) should rise or \\(P_c\\) should fall.

#### High Mass Stars — CNO Powered H Burning [AB]

![high](/images/musings/stellar_evolution/high_mass_evol.png)

* \\(P_c\\) falls, so the core expands. And hence \\(P_{\text{env}}\\)(envelope pressure) falls leading to expansion of the outer envelope (radius increases a lot). This is the self regulating mechanism of the star. The star is adapting itself to the changes in its composition.
* The nuclear energy generation rate is largely concentrated to the core, and this leads to large \\(\nabla_{\text{rad}}\\). This produces a convective core.
* \\(\epsilon_{\text{cno}} \propto T^{18}\\)
* Convection in the core causes the materials to be homogeneously mixed so hydrogen content \\(X(m)\\) is constant in the core.
* Convective core mass \\(M_{\text{cc}} \sim \nabla_{\text{rad}}\\), \\(\nabla_{\text{rad}}\\) depends on \\(\kappa\\), \\(\kappa \sim 1+X\\). So as H burns, \\(X\\) decreases in core, so \\(M_{\text{cc}}\\) decreases in general.
* By the end of the main sequence, \\(M_{\text{cc}}\\) and \\(\epsilon_{\text{nuc}}\\) is very low. So now the star is losing more energy at the surface than is being produced in the core. Also the constant \\(X(m)\\) is now depleted. Because of this, the star undergoes an overall contraction and this appears like a hook in its evolutionary track.
* The temperature also becomes high enough to start H shell burning.

#### Low Mass Stars — pp Chain Powered H Burning [AB]

![low](/images/musings/stellar_evolution/low_mass_evol.png)

* \\(\epsilon_{\text{pp}} \propto T^4\\)
* So core temperature \\(T_c\\) and core radius \\(\rho_c\\) increases more than CNO.
* So the pressure does not fall so much and the outer layers expand less and the increase in radius is "modest".
* The core is radiative and the star evolves parallel to the ZAMS.
* Because of radiative core, the materials are not mixed, rather there is a clear gradient in \\(X(m)\\). \\(X(m)\\) increases outwards from the core and the hydrogen burning rate is maximum in the centre (\\(T_c\\) and \\(\rho_c\\) is highest at the centre).
* Because of this, there is a smooth transition to the H-shell burning without any "hooks" in the evolutionary path.

---

### Hydrogen Shell Burning

* Helium core, Hydrogen shell
* SC limit: ratio of core mass to total mass
* Mirror principle: core contracts – envelope expands; core expands – envelope contracts.

#### Intermediate to High Mass Stars
* Convective core
* **\<B\>**:
  * H-shell burning starts
  * Contraction phase starts at the end of MS
* **\<C\>**:
  * H content in the core burnt and finished, convective core disappears
  * Nuclear burning has moved from core to shell
* **\<CD\>**:
  * First part of H shell burning
  * Hydrogen exhausted core mass < SC limit, so the structure is in Thermal Equilibrium
  * Slow burning phase (\\(2 \times 10^6 \text{ years}\\))
  * Temperature and density gradient is shallow between core and shell, so the shell occupies a large mass: thick shell burning phase
  * The burnt materials deposited on the core — He core growing in mass slowly — SC limit crosses
  * Core contracts
  * The burning shell is contracting but the Envelope expands (mirror principle) above it.
  * Temperature and density gradient between core and envelope rises, so now we are moving to a thin shell burning phase
  * Energy generated is absorbed by the expanding envelope to grow
  * Luminosity rises
* **Mid \<CD\> to \<D\>**:
  * Happens in KH timescale, so its very hard to detect stars in this phase and it appears like a gap in the HRD called Hertzsprung Gap
* **\<D\>**:
  * Envelope temperature falls, so its opacity rises
  * Hence a deep convective core develops

#### Low Mass Stars

**1 solar mass:**
* No convective core in central H burning, so the dense core is close to becoming degenerate
* Gradual transition to H shell burning
* As He core mass grows, degeneracy pressure dominates and SC limit becomes irrelevant.
* The star stays in Thermal and Hydrostatic equilibrium, and there is no Hertzsprung gap
* **\<B\>**:
  * H is practically exhausted in the core, shell burning starts
* **\<BC\>**:
  * Core mass grows, and it contracts, hence the envelope expands
  * This is the thick H shell burning phase
  * The envelope expansion leads to the burning becoming thinner in mass slowly.
  * This is basically the subgiant phase of the stars
* **\<C\>**:
  * The core has become He degenerate completely
  * The envelope has cooled and becomes convective largely
  * This is the base of RGB

**1.1 - 1.5 solar mass:**
* The core is slightly convective
* After hydrogen exhaustion, there is a small hook in the track
* **\<B\>**, **\<BC\>**, **\<C\>**: evolution proceeds similar to the 1 solar mass star
* Ends with a degenerate He core by the end of H shell burning.

**1.5 - 2 solar mass:**
* Small convective core
* **\<B\>**, **\<BC\>**, **\<C\>**: evolution proceeds similar to the 1 solar mass star
* Small Hertzsprung gap at the SC limit
* Ends with a degenerate He core

---

### RGB

#### High to Intermediate Mass Star
* **\<DE\>**:
  * Expansion goes on in the KH timescale
  * The core keeps contracting
  * Luminosity rises, Temperature remains the same
  * The star is evolving almost along the Hayashi track
  * At the deepest point in E, the convective envelope reaches deeper than what it was at the central H burning phase
  * Convection is now bringing materials up to the surface from the core [halfway between D and E]. This is called dredge up.

#### Low Mass Star
* There is large pressure gradient between core and envelope. The pressure at the base of the envelope is very little, while the edge of the core has a large pressure.
* Evolution depends on the core mass only and not on the total mass, hence independent of the temperature
* So the luminosity is governed by core mass and has an approx value of \\(2.3 \times 10^5 \, L_\odot\\) — higher mass stars will also have same luminosity but a slightly higher effective temperature
* So basically the evolution of all stars of this mass will converge after it is degenerate
* This evolution is also along the Hayashi line.
  * In low mass stars, Hayashi track depends on the metallicity
  * So metallicity of globular stars can be determined by their position on the RGB
* **\<CD\>**:
  * The shell burning is adding mass to the core.
  * The core contracts
  * Mass of shell decreases, so radius and luminosity rises
  * This higher luminosity increases the rate of shell burning, so core mass grows faster.
  * Increased rate of shell burning increases the shell temperature as well as core temperature.
* **\<D\>**:
  * Convective envelope has penetrated deep inside the star
  * Mixing of elements — first dredge up
* **\<E\>**:
  * Hydrogen shell has eaten its way out to the discontinuity left by the convective envelope
  * The shell suddenly has high H abundance, hence low \\(\mu\\)
  * So \\(L\\) lowers again, and this leads to a "bump"
  * At the tip of RGB, the star experiences mass loss from stellar winds.

---

### Helium Core Burning

#### High to Intermediate Mass Stars:
* **\<E\>**:
  * He ignition starts. Thermally stable helium burning.
* **\<EF\>**:
  * Convective envelope contracts
  * \\(L\\) decreases
  * \\(R\\) decreases
  * Star moves along the Hayashi line
* **\<F\>**:
  * Most of the envelope has now become radiative
  * Star leaves RGB
  * \\(T_{\text{eff}}\\) rises, blue loop onset
* **\<FGH\>**:
  * Blue loop
* **\<G\>**:
  * Hottest point of the blue loop
  * Minimum \\(R\\)
* **\<GH\>**:
  * Envelope is expanding again
  * Core helium burning is over
  * The star is back on the Hayashi line
* For \\(M < 4 \, M_\odot\\), the loop is small and less blue
* Blue loops formation depends on: chemical composition, mass

#### Low Mass Stars:
* Degenerate helium core
* **\<EF\>**:
  * Triple alpha fusion
  * Energy released, internal energy rises as degenerate core has no dependence on \\(T\\)
  * So no \\(P\\) change nor is any work done.
  * Internal energy of only non degenerate ions change
  * \\(T\\) rises
* **\<F\>**:
  * \\(T\\) has shot up
  * Thermonuclear runaway — energy overproduction
  * Enormous luminosity
  * Helium flash!!!
* **\<FG\>**:
  * High \\(T\\) has almost lifted the electron degeneracy from the core.
  * \\(T\\) increase also increases the \\(P\\) now
  * The gas starts behaving like an ideal gas
  * This leads to expansion of the envelope using the energy of the thermonuclear runaway
  * Expansion leads to cooling
* **\<G\>**:
  * The expansion is decreasing the energy production rate
  * Thermal equilibrium is achieved. \\(T\\) and \\(L\\) go back to what it was before the flash
  * This leads to a semi convective layer between the shell where this is happening to the H burning layer
  * The whole core expands a little bit finally, so the envelope contracts from mirror principle
* F and G do not occur at the core but at a shell where \\(T\\) is max and mass is \\(0.1 \, M_\odot\\).
* **\<GH\>**:
  * He burning of core continues
  * Position in the HRD is now close to RGB
  * \\(L \sim 50 \, L_\odot\\), as determined by the core mass
  * Core masses are almost the same for all low mass stars at the start of the He burning and \\(L\\) depends on \\(M_c\\) only and not on the total mass. So at this point all stars occupy the same position at the HRD. This is called the red clump in CMD
  * The envelope masses may vary
  * \\(T_{\text{eff}}\\) and \\(R\\) depend on the \\(M_{\text{env}}\\)
  * So stars with different envelope masses form a line in the HRD and this is called the Horizontal branch.
  * It is seen mostly in low metallicity clusters.
  
  
  
  

---

(all images adopted from: Onno Pols lecture notes on stellar structure and evolution)
