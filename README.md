### What's this

Library of objects and enums shared between our client apps and server API endpoints.

### To do list

* Listing Builder - Bare class that creates a Listing object.

`let l = new Listing();`

* Advising - Return list of valid choices.

`Listing.getOptions(RO.PropertyTypes);`

* Setters and Validators - Return promise on each attempt.

```
  Listing.set(RO.PropertyTypes.Condominium)
    .then(()=>{

    })
    .catch(()=>{

    });
```

* API Client - Interface for uploading the listing or what not.

#### Scoped Packages (how-to)

* http://nitayneeman.com/posts/understanding-scoped-packages-in-npm/
* https://docs.npmjs.com/misc/scope

```
# Publishing
npm init --scope=realtycoast
npm publish --access public

# Installing
npm install @realtycoast/objects --save
```
