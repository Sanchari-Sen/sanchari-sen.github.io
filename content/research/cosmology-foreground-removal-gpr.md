---
title: Foreground Removal of 21 cm Cosmological Signals Using Gaussian Process Regression
date: June, 2023
description: Extracting the faint Epoch of Reionization (EoR) signal from dominant astrophysical foregrounds using Bayesian non-parametric modeling.
tags: ["cosmology", "gaussian-processes"]
mathjax: true
---
**Location:** Internship at the STARC Lab, Indian Institute of Technology, Indore  
**Supervisor:** Prof. Abhirup Datta  
**Mentor:** Samit Kumar Pal  

### Key Investigations
* **21 cm Cosmology & Foregrounds:** Investigated the spin-flip hyperfine transition of neutral hydrogen (\\(1\text{s}\\) ground state) emitting \\(21\text{cm}\\) radiation as a key observational probe of Cosmic Dawn and the Epoch of Reionization (EoR). Analyzed the severe impact of bright astrophysical foregrounds (e.g., galactic synchrotron emission) that obscure this weak signal in radio observations.
* **Gaussian Process Regression (GPR) Framework:** Modeled the total observed sky data using custom covariance functions within a Bayesian non-parametric framework. Selected a **Squared-Exponential kernel** to capture the highly smooth spectral behavior of foregrounds, combined with a **non-stationary kernel** optimized to isolate the rapidly oscillating cosmic \\(21\text{cm}\\) signal and instrumental noise.
* **Computational Pipeline:** Implemented the GPR framework using the `GPy` module in Python on synthetic datasets to perform signal-foreground separation.

---

### Outcomes & Directions
* Successfully extracted the smooth spectral foreground component from the simulated data stream.
* **Current Challenges:** The residual cosmic signal remains highly sensitive to noise; further development is required to improve the signal-to-noise ratio (\\(\text{SNR}\\)).
* **Hyperparameter Sensitivity:** Observed that signal extraction is highly sensitive to the initial kernel selection, where variations in covariance structures alter the resulting amplitude metrics.
* **Computational Scaling:** Noted that inversion of large covariance matrices scales as \\(\mathcal{O}(N^3)\\), requiring significant computational overhead for large-scale dataset arrays.


![gpr](/images/projects/result.png)

---

### Report
[📄 Read Full Report](https://drive.google.com/file/d/1JUn7Z1LCyhNLdvhQq6X1IOJYoh2ul5Cm/view?usp=drive_link)
