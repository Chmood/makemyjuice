### FEATURES

* i18n

  * split language file
  * translate ALL UI text

* Features

  * todo modes : nicotine, base
  * allow creation and edition of ingredients
  * allow the user to save his recipes (+ import/export)
  * fix custom currency mode
  * add favourite params mode

* Formula

  * rounding function (to get rid of JS rounding errors)

* UI

  * format numbers (mostly rounding, to avoid jerk in 2-way inputs)
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
