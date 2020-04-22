# BLOG-EDITOR-ANGULAR-TEST
 The aim of this project is to try and test 3 Blog editors so the client could choose one of all three 

## MediumEditor 
Is a pure JS Lightweight Editors currntly need a lot of work a round to work with Angular 


Data saved and retrived in a form of **HTML markup**

ex: 

```
<section name="0ed1" class="section section--body section--first">
   <div class="section-divider">
      <hr class="section-divider">
   </div>
   <div class="section-content">
      <div class="section-inner sectionLayout--insetColumn">
         <h3 name="f8e8" class="graf graf--h3 graf--leading graf--title">
            <br>
         </h3>
         <p name="982b" class="graf graf--p graf-after--h3">
            The example of text that was written in <strong class="markup--strong markup--p-strong">one of popula</strong>r text editors.
         </p>
         <h3 name="c2ad" class="graf graf--h3 graf-after--p">
            With the header of course
         </h3>
         <p name="83d3" class="graf graf--p graf-after--h3">
            So what do we have?
         </p>
      </div>
   </div>
</section>
<section name="d1d2" class="section section--body">
  ...
</section>
```
## EditorJS
 **block-styled** editor for rich media stories. It outputs clean data in *JSON* instead of heavy HTML-markup.
 ```
 {
    "time" : 1550476186479,
    "blocks" : [
        {
            "type" : "paragraph",
            "data" : {
                "text" : "The example of text that was written in <b>one of popular</b> text editors."
            }
        },
        {
            "type" : "header",
            "data" : {
                "text" : "With the header of course",
                "level" : 2
            }
        },
        {
            "type" : "paragraph",
            "data" : {
                "text" : "So what do we have?"
            }
        }
    ],
    "version" : "2.8.1"
}
```
 

## CKEditor 4
