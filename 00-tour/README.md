 <h1>Angular Warm up</h1>
 
  <h2> The Hero Editor</h2>

1.  Change the title to Tour of Heroes and move it ot the top in the component
2.  In the template make the title and h1 header
3.  Add bootstrap css cdn for styling
4.  Generate a component named heroes
5.  add a property named heroName and assign it to a string
6.  Make the heroes component display the heroes name in an h2 header
7.  Show the heroes component by adding it to the app component
8.  In core/types/tour-of-heroes.types.ts create a Hero interface with an id and a name. Add the type to the hero property.
9.  Use the uppercase pipe to format the header to be all uppercase
10. Add the FormsModule to the the app module.
11. Refactor the heroes details area to be an input and label for for the heroes name

```
<form>
  <div class="input-group">
    <label class="input-group-text"  for="name">Hero name: </label>
    <input id="name" [(ngModel)]="hero.name" placeholder="name" type=text  class="form-control">
  </div>
</form>
```
