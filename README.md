# novi-plugin-rd-facebook
Novi Builder Plugin for visual [RD Facebook](https://github.com/TemplatemonsterPlugins/rd-facebook) customization

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-rd-facebook.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder

## What you are able to do
* Change access token which feeds are shown
* Or specify a page type

## Developer Settings
* querySelector — contains a css selector which defines the Plugin container.

## How to add RD Facebook on your page
If your website doesn't contain RD Facebook follow the instructions below to install it.

### Include RD Facebook files to Website
Copy the "assets/rd-facebook.js" and "assets/rd-facebook.css" to website's JS and CSS folders respectively and include this files to your website.

### Add RD Facebook HTML Layout
Add basic RD Facebook HTML Layout:

```html
<section class="section facebook" data-type="anchor" data-fb-id="*********" data-fb-page-type="group" data-fb-date-format="%d %B %Y" data-fb-access="*********">
  <article data-fb-post="" class="post-facebook text-left clearfix">
    ...
  </article>
</section>
```

Markup in given block may be any, including elements of the grid, etc. It is only necessary presence element with the attribute data-fb-post or data-fb-user.
You can find more detailed information about facebook html markup in the [official documentation](https://github.com/TemplatemonsterPlugins/rd-facebook)

Example of RD Facebook markup using [Bootstrap](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/):

```html
<section class="section facebook" data-type="anchor" data-fb-id="*********" data-fb-page-type="group" data-fb-date-format="%d %B %Y" data-fb-access="*********">
  <div class="container">
    <h1>Latest From Facebook</h1>
    <div class="facebook-wrap">
      <div class="row">
        <div class="col-xs-10 col-sm-4">
          <article data-fb-post="" class="post-facebook text-left clearfix">
            <div class="post-meta text-right">
              <div data-created_time="text, datetime" class="time"></div>
              <div class="post-meta-profile media pull-left">
                <div class="media-left">
                  <img src="images/_blank.png" alt="" data-from-picture="src" data-remove="" height="34" width="34"> </div>
                <div class="media-body">
                  <div data-from-name="text"></div>
                </div>
              </div>
            </div>
            <div data-message="text" class="post-message"></div>
            <div class="post-attachment text-center text-md-left">
              <img src="images/_blank.png" alt="" data-picture="src" data-remove="" width="130" height="130">
              <div class="post-attachment-wrap">
                <div class="h6">
                  <a href="#" data-postlink="href" data-name="text"></a>
                </div>
                <p data-description="text" class="small"></p>
              </div>
            </div>
            <div class="text-center text-md-left">
              <a href="#" data-postlink="href" data-remove="" class="small text-primary pull-xl-right">View on Facebook</a>
              <ul class="list-inline list-inline-sm">
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-thumb-up-outline"></span>
                  <span data-likes-count="text" class="text-middle"></span>
                </li>
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-comment-multiple-outline"></span>
                  <span data-comments-count="text" class="text-middle"></span>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col-xs-10 col-sm-4">
          <article data-fb-post="" class="post-facebook text-left clearfix">
            <div class="post-meta text-right">
              <div data-created_time="text, datetime" class="time"></div>
              <div class="post-meta-profile media pull-left">
                <div class="media-left">
                  <img src="images/_blank.png" alt="" data-from-picture="src" data-remove="" height="34" width="34"> </div>
                <div class="media-body">
                  <div data-from-name="text"></div>
                </div>
              </div>
            </div>
            <div data-message="text" class="post-message"></div>
            <div class="post-attachment text-center text-md-left">
              <img src="images/_blank.png" alt="" data-picture="src" data-remove="" width="130" height="130">
              <div class="post-attachment-wrap">
                <div class="h6">
                  <a href="#" data-postlink="href" data-name="text"></a>
                </div>
                <p data-description="text" class="small"></p>
              </div>
            </div>
            <div class="text-center text-md-left">
              <a href="#" data-postlink="href" data-remove="" class="small text-primary pull-xl-right">View on Facebook</a>
              <ul class="list-inline list-inline-sm">
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-thumb-up-outline"></span>
                  <span data-likes-count="text" class="text-middle"></span>
                </li>
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-comment-multiple-outline"></span>
                  <span data-comments-count="text" class="text-middle"></span>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="col-xs-10 col-sm-4">
          <article data-fb-post="" class="post-facebook text-left clearfix">
            <div class="post-meta text-right">
              <div data-created_time="text, datetime" class="time"></div>
              <div class="post-meta-profile media pull-left">
                <div class="media-left">
                  <img src="images/_blank.png" alt="" data-from-picture="src" data-remove="" height="34" width="34"> </div>
                <div class="media-body">
                  <div data-from-name="text"></div>
                </div>
              </div>
            </div>
            <div data-message="text" class="post-message"></div>
            <div class="post-attachment text-center text-md-left">
              <img src="images/_blank.png" alt="" data-picture="src" data-remove="" width="130" height="130">
              <div class="post-attachment-wrap">
                <div class="h6">
                  <a href="#" data-postlink="href" data-name="text"></a>
                </div>
                <p data-description="text" class="small"></p>
              </div>
            </div>
            <div class="text-center text-md-left">
              <a href="#" data-postlink="href" data-remove="" class="small text-primary pull-xl-right">View on Facebook</a>
              <ul class="list-inline list-inline-sm">
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-thumb-up-outline"></span>
                  <span data-likes-count="text" class="text-middle"></span>
                </li>
                <li>
                  <span class="text-middle icon icon-xxs mdi mdi-comment-multiple-outline"></span>
                  <span data-comments-count="text" class="text-middle"></span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>

```

### Initialize RD Facebook
```js

"use strict";

/**
 * Initialize All Scripts
 */
$document.ready(function () {
    var facebookfeed = $(".facebook");
     /**
     * RD Facebook
     * @description Enables RD Facebook plugin
     */
    if (facebookfeed.length > 0) {
      var i;
      for (i = 0; i < facebookfeed.length; i++) {
        var facebookfeedItem = facebookfeed[i];
        $(facebookfeedItem).RDFacebookFeed({});
      }
    }
});
```