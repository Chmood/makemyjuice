### FEATURES

* Bugs

* fix custom currency mode
* fix prev/nest links in ingredient page
* format numbers (mostly rounding, to avoid jerk in 2-way inputs)

* i18n

  * split language file
  * translate ALL UI text

* Features

  * allow creation and edition of ingredients
  * allow the user to save his recipes (+ import/export)

* Formula

  * rounding function (to get rid of JS rounding errors)

* UI

  * color picker component
  * mousewheel handling
  * sliders components for PG/VG ratios

* Misc

  * Server side rendering (for SEO!)

### CONFIGURATION

* Language
* Currency

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
