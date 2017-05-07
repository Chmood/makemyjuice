### FEATURES

* language chooser
* Server side rendering (for SEO!)

* UI

  * format numbers (rounding mostly)
  * mousewheel handling
  * sliders components for PG/VG ratios


### CONFIGURATION

* Language

* No nicotine mode
* Base mode (no aromas - no additives too?)
* Price mode
* Use drops for small quantities
* Draw the beaker

* prefered PG/VG ratio
* prefered nicotine

### INPUT PARAMS

#### WANTED

  * Quantity (in mL)
  * PG/VG ratio (ratio)
  * Nicotine (in mg/mL)
  * Aromas & additives [ID | ratio]

#### INGREDIENTS

  * Bases [ID | name | price | viscosity | PG/VG ratio | nicotine ]
  * Aromas [ID | name | price | viscosity | PG/VG ratio]
  * Additives [ID | name | price | viscosity]


### OUTPUT RESULTS

* Faisability of recipe (boolean)
* Ingredients [ID | ratio] => [quantity], number of ingredients
