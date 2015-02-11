# Stretch CSS Gridsystem

Stretch is a super simple responsive CSS grid system. For now, it is a 12 column grid that can have any gutter size you want. Columns can be pushed and pulled to make manoeuvring content really easy and breakpoints can be customised. The naming of classes is readable and easy to understand.

I hope people find this helpful.

## Getting Started

Stretch can be implemented in two ways: either use the `.scss` stylesheet in this repository compile it to CSS; or, link the `.css` file in your HTML document's head:

```<link rel="stylesheet" href="css/stretch.css">```

To use the grid, firstly create an HTML element with a class of ```.row```.  Within the row, create a column with the class ```.col__x-12```, where x equals the number of columns you want to take up.

```html
<div class="container">

  <div class="row">

    <div class="col__12-12">
      This is a column that takes up all 12 out of 12 columns.
    </div>

    <div class="col__6-12">
      This is a column that takes up 6 out of 12 columns.
    </div>

    <div class="col__md-6-12 col__sm-12-12">
      This is a column that takes up 6 out of 12 columns for devices &ge;768px in width.  For devices &lt;768px, it takes up all 12 out of 12 columns.
    </div>

  </div>

</div>
```
