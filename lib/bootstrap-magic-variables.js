bootstrap_magic_variables = [
  {
    "category" : "help",
    "icon": "question-sign",
    "_id" : "howTo",
    "data": []
  },
  {
    "category" : "colors",
    "icon": "tint",
    "_id" : "brandColors",
    "data": [
      { "_id":"@brand-primary", "value":"#428bca", "type": "color"},
      { "_id":"@brand-success", "value":"#5cb85c", "type": "color"},
      { "_id":"@brand-warning", "value":"#f0ad4e", "type": "color"},
      { "_id":"@brand-danger", "value":"#d9534f", "type": "color"},
      { "_id":"@brand-info", "value":"#5bc0de", "type": "color"}
    ]
  },

  {
    "category" : "colors",
    "icon": "adjust",
    "_id" : "textColors",
    "data" : [
      { "_id":"@body-bg", "value":"#fff", "type": "color"},
      { "_id":"@text-color", "value":"@gray-dark", "type": "color"},
      { "_id":"@headings-color", "value":"inherit", "type": "text"},
      { "_id":"@link-color", "value":"@brand-primary", "type": "color"},
      { "_id":"@link-hover-color", "value": "darken(@link-color, 15%)", "type": "color"},

      {"_id":"@code-color", "value":"#c7254e", "type": "color"},
      {"_id":"@code-bg", "value":"#f9f2f4", "type": "color"},

      {"_id":"@pre-bg", "value":"#f5f5f5", "type":"color"},
      {"_id":"@pre-color", "value":"@gray-dark", "type":"color"},
      {"_id":"@pre-border-color", "value":"#ccc", "type":"color"},
      {"_id":"@pre-scrollable-max-height", "value":"340px", "type":"text"},

      {"_id":"@text-muted", "value":"@gray-light", "type":"color"},
      {"_id":"@abbr-border-color", "value":"@gray-light", "type":"color"},
      {"_id":"@headings-small-color", "value":"@gray-light", "type":"color"},
      {"_id":"@blockquote-small-color", "value":"@gray-light", "type":"color"},
      {"_id":"@blockquote-border-color", "value":"@gray-lighter", "type":"color"},
      {"_id":"@page-header-border-color", "value":"@gray-lighter", "type":"color"},

      {"_id":"@hr-border", "value":"@gray-lighter", "type":"color"}
    ]
  },

  {
    "category": "colors",
    "icon" : "equalizer",
    "_id" : "grays",
    "data": [
      { "_id":"@gray-darker", "value":"#222222", "type": "color"},
      { "_id":"@gray-dark", "value":"#333333", "type": "color"},
      { "_id":"@gray", "value":"#555555", "type": "color"},
      { "_id":"@gray-light", "value":"#999999", "type": "color"},
      { "_id":"@gray-lighter", "value":"#eeeeee", "type": "color"}
    ]
  },

  {
    "category": "colors",
    "icon" : "hand-up",
    "_id" : "buttons",
    "data":[

      {"_id":"@btn-font-weight", "value":"normal", "type":"text"},

      {"_id":"@btn-default-color", "value":"#333", "type":"color"},
      {"_id":"@btn-default-bg", "value":"#fff", "type":"color"},
      {"_id":"@btn-default-border", "value":"#ccc", "type":"color"},

      {"_id":"@btn-primary-color", "value":"#fff", "type":"color"},
      {"_id":"@btn-primary-bg", "value":"@brand-primary", "type":"color"},
      {"_id":"@btn-primary-border", "value":"darken(@btn-primary-bg, 5%)", "type":"color"},

      {"_id":"@btn-success-color", "value":"#fff", "type":"color"},
      {"_id":"@btn-success-bg", "value":"@brand-success", "type":"color"},
      {"_id":"@btn-success-border", "value":"darken(@btn-success-bg, 5%)", "type":"color"},

      {"_id":"@btn-warning-color", "value":"#fff", "type":"color"},
      {"_id":"@btn-warning-bg", "value":"@brand-warning", "type":"color"},
      {"_id":"@btn-warning-border", "value":"darken(@btn-warning-bg, 5%)", "type":"color"},

      {"_id":"@btn-danger-color", "value":"#fff", "type":"color"},
      {"_id":"@btn-danger-bg", "value":"@brand-danger", "type":"color"},
      {"_id":"@btn-danger-border", "value":"darken(@btn-danger-bg, 5%)", "type":"color"},

      {"_id":"@btn-info-color", "value":"#fff", "type":"color"},
      {"_id":"@btn-info-bg", "value":"@brand-info", "type":"color"},
      {"_id":"@btn-info-border", "value":"darken(@btn-info-bg, 5%)", "type":"color"},

      {"_id":"@btn-link-disabled-color", "value":"@gray-light", "type":"color"},

      {"_id":"@close-color", "value":"#000", "type": "color"},
      {"_id":"@close-font-weight", "value":"bold", "type": "text"},
      {"_id":"@close-text-shadow", "value":"0 1px 0 #fff", "type": "text"},
    ]
  },

  {
    "category" : "navigation",
    "icon" : "collapse-down",
    "_id" : "dropdowns",
      "data": [
      {"_id":"@dropdown-bg", "value":"#fff", "type": "color"},
      {"_id":"@dropdown-border", "value":"rgba(0,0,0,.15)", "type": "color"},
      {"_id":"@dropdown-divider-bg", "value":"#e5e5e5", "type": "color"},

      {"_id":"@dropdown-link-active-color", "value":"#fff", "type": "color"},
      {"_id":"@dropdown-link-active-bg", "value":"@component-active-bg", "type": "color"},

      {"_id":"@dropdown-link-color", "value":"@gray-dark", "type":"color"},
      {"_id":"@dropdown-link-hover-color", "value":"#fff", "type": "color"},
      {"_id":"@dropdown-link-hover-bg", "value":"@dropdown-link-active-bg", "type": "color"},

      {"_id":"@dropdown-link-disabled-color", "value":"@gray-light", "type": "color"},
      {"_id":"@dropdown-header-color", "value":"@gray-light", "type": "color"},
      {"_id":"@dropdown-caret-color", "value":"#000", "type": "color"}
    ]
  },

  {
    "category" : "navigation",
    "icon" : "menu-hamburger",
    "_id" : "navBar",
    "data": [

      {"_id":"@navbar-height","value": "50px", "type":"text"},
      {"_id":"@navbar-margin-bottom", "value" :"@line-height-computed", "type":"text"},
      {"_id":"@navbar-default-color", "value" :"#777", "type":"color"},
      {"_id":"@navbar-default-bg", "value" :"#f8f8f8", "type":"color"},
      {"_id":"@navbar-default-border", "value" :"darken(@navbar-default-bg, 6.5%)", "type":"color"},
      {"_id":"@navbar-border-radius", "value" :"@border-radius-base", "type":"text"},
      {"_id":"@navbar-padding-horizontal", "value" :"floor(@grid-gutter-width / 2)", "type":"text"},
      {"_id":"@navbar-padding-vertical","value":"((@navbar-height - @line-height-computed) / 2)", "type":"text"},

      {"_id":"@navbar-default-link-color", "value":"#777", "type":"color"},
      {"_id":"@navbar-default-link-hover-color", "value":"#333", "type":"color"},
      {"_id":"@navbar-default-link-hover-bg", "value":"transparent", "type":"color"},
      {"_id":"@navbar-default-link-active-color", "value":" #555", "type":"color"},
      {"_id":"@navbar-default-link-active-bg", "value":"darken(@navbar-default-bg, 6.5%)", "type":"color"},
      {"_id":"@navbar-default-link-disabled-color", "value":" #ccc", "type":"color"},
      {"_id":"@navbar-default-link-disabled-bg", "value":"transparent", "type":"color"},

      {"_id":"@navbar-default-brand-color", "value":"@navbar-default-link-color", "type":"color"},
      {"_id":"@navbar-default-brand-hover-color", "value":"darken(@navbar-default-link-color, 10%)", "type":"color"},
      {"_id":"@navbar-default-brand-hover-bg", "value":"transparent", "type":"color"},

      {"_id":"@navbar-default-toggle-hover-bg", "value":"#ddd", "type":"color"},
      {"_id":"@navbar-default-toggle-icon-bar-bg", "value":"#888", "type":"color"},
      {"_id":"@navbar-default-toggle-border-color", "value":"#ddd", "type":"color"},

      {"_id":"@navbar-inverse-color", "value":"@gray-light","type":"color"},
      {"_id":"@navbar-inverse-bg", "value":"#222","type":"color"},
      {"_id":"@navbar-inverse-border", "value": "darken(@navbar-inverse-bg, 10%)","type":"color"},

      {"_id":"@navbar-inverse-link-color", "value":"@gray-light","type":"color"},
      {"_id":"@navbar-inverse-link-hover-color", "value":"#fff","type":"color"},
      {"_id":"@navbar-inverse-link-hover-bg", "value":"transparent","type":"color"},
      {"_id":"@navbar-inverse-link-active-color", "value":"@navbar-inverse-link-hover-color","type":"color"},
      {"_id":"@navbar-inverse-link-active-bg", "value":"darken(@navbar-inverse-bg, 10%)","type":"color"},
      {"_id":"@navbar-inverse-link-disabled-color", "value": "#444","type":"color"},
      {"_id":"@navbar-inverse-link-disabled-bg", "value":"transparent","type":"color"},
      {"_id":"@navbar-inverse-brand-color", "value":"@navbar-inverse-link-color","type":"color"},
      {"_id":"@navbar-inverse-brand-hover-color", "value":"#fff","type":"color"},
      {"_id":"@navbar-inverse-brand-hover-bg", "value":"transparent","type":"color"},

      {"_id":"@navbar-inverse-toggle-hover-bg", "value":"#333","type":"color"},
      {"_id":"@navbar-inverse-toggle-icon-bar-bg", "value":"#fff","type":"color"},
      {"_id":"@navbar-inverse-toggle-border-color", "value":"#333","type":"color"},
    ]
  },

  {
    "category" : "navigation",
    "icon" : "list",
    "_id" : "navTabs",
    "data": [

      {"_id":"@nav-link-padding", "value":"10px 15px", "type":"text"},
      {"_id":"@nav-link-hover-bg", "value":"@gray-lighter", "type":"color"},

      {"_id":"@nav-disabled-link-color", "value":"@gray-light", "type":"color"},
      {"_id":"@nav-disabled-link-hover-color", "value":"@gray-light", "type":"color"},

      {"_id":"@nav-tabs-border-color", "value":"#ddd", "type":"color"},

      {"_id":"@nav-tabs-link-hover-border-color", "value":"@gray-lighter", "type":"color"},

      {"_id":"@nav-tabs-active-link-hover-bg", "value":"@body-bg", "type":"color"},
      {"_id":"@nav-tabs-active-link-hover-color", "value":"@gray", "type":"color"},
      {"_id":"@nav-tabs-active-link-hover-border-color", "value":"#ddd", "type":"color"},

      {"_id":"@nav-tabs-justified-link-border-color", "value": "#ddd", "type":"color"},
      {"_id":"@nav-tabs-justified-active-link-border-color", "value":"@body-bg", "type":"color"},

      {"_id":"@nav-pills-border-radius","value":"@border-radius-base", "type":"text"},
      {"_id":"@nav-pills-active-link-hover-bg","value":"@component-active-bg", "type":"color"},
      {"_id":"@nav-pills-active-link-hover-color","value":"#fff", "type":"color"}
    ]
  },



  {
    "category": "typography",
    "icon" : "text-background",
    "_id" : "typography",
    "data": [

      {"_id":"@font-family-sans-serif", "value":"Open Sans", "type": "font"},
      {"_id":"@font-family-serif", "value":"PT Serif", "type": "font"},
      {"_id":"@font-family-monospace", "value":"Monaco", "type": "font"},
      {"_id":"@font-family-base", "value":"@font-family-sans-serif", "type": "text"},

      {"_id":"@font-size-base", "value":"14px", "type": "text"},
      {"_id":"@font-size-large", "value":"ceil(@font-size-base * 1.25)", "type": "text"},
      {"_id":"@font-size-small", "value":"ceil(@font-size-base * 0.85)", "type": "text"},

      {"_id":"@font-size-h1", "value":"floor((@font-size-base * 2.6))", "type": "text"},
      {"_id":"@font-size-h2", "value":"floor((@font-size-base * 2.15))", "type": "text"},
      {"_id":"@font-size-h3", "value":"floor((@font-size-base * 1.7))", "type": "text"},
      {"_id":"@font-size-h4", "value":"floor((@font-size-base * 1.25))", "type": "text"},
      {"_id":"@font-size-h5", "value":"@font-size-base", "type": "text"},
      {"_id":"@font-size-h6", "value":"floor((@font-size-base * 0.85))", "type": "text"},

      {"_id":"@line-height-base", "value":"1.428571429", "type": "text"},
      {"_id":"@line-height-computed", "value":"floor(@font-size-base * @line-height-base)", "type": "text"},
      {"_id":"@line-height-large", "value":"1.33","type":"text"},
      {"_id":"@line-height-small", "value":"1.5","type":"text"},

      {"_id":"@headings-font-family", "value":"@font-family-base", "type": "text"},
      {"_id":"@headings-font-weight", "value":"500", "type": "text"},
      {"_id":"@headings-line-height", "value":"1.1", "type": "text"}
    ]
  },

  {
    "category": "scaffolding",
    "icon" : "sound-stereo",
    "_id" : "padding",
    "data": [
      
      {"_id":"@padding-base-vertical", "value":"6px", "type": "text"},
      {"_id":"@padding-base-horizontal", "value":"12px", "type": "text"},

      {"_id":"@padding-large-vertical", "value":"10px", "type": "text"},
      {"_id":"@padding-large-horizontal", "value":"16px", "type": "text"},

      {"_id":"@padding-small-vertical", "value":"5px", "type": "text"},
      {"_id":"@padding-small-horizontal", "value":"10px", "type": "text"},

      {"_id":"@component-active-bg", "value":"@brand-primary", "type": "color"}
    ]
  },

  {
    "category": "scaffolding",
    "icon" : "unchecked",
    "_id" : "borderRadius",
    "data": [

      {"_id":"@border-radius-base", "value":"4px", "type": "text"},
      {"_id":"@border-radius-large", "value":"6px", "type": "text"},
      {"_id":"@border-radius-small", "value":"3px", "type": "text"},

      {"_id":"@component-active-bg", "value":"@brand-primary", "type": "text"}
    ]
  },

  {
    "category": "components",
    "icon" : "tasks",
    "_id" : "forms",
    "data": [
      {"_id":"@input-bg", "value":"#fff", "type": "color"},
      {"_id":"@input-bg-disabled", "value":"@gray-lighter", "type": "color"},

      {"_id":"@input-color", "value":"@gray", "type": "color"},
      {"_id":"@input-border", "value":"#ccc", "type": "color"},
      {"_id":"@input-border-radius", "value":"@border-radius-base", "type": "text"},

      {"_id":"@input-color-placeholder", "value":"@gray-light", "type": "color"},

      {"_id":"@input-height-base", "value":"(@line-height-computed + (@padding-base-vertical * 2) + 2)", "type": "text"},
      {"_id":"@input-height-large", "value":"(floor(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2)", "type": "text"},
      {"_id":"@input-height-small", "value":"(floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2)", "type": "text"},

      {"_id":"@legend-color", "value":"@gray-dark", "type": "color"},
      {"_id":"@legend-border-color", "value":"#e5e5e5", "type": "color"},

      {"_id":"@input-group-addon-bg", "value":"@gray-lighter", "type": "color"},
      {"_id":"@input-group-addon-border-color", "value":"@input-border", "type": "color"}
    ]
  },

  {
    "category": "components",
    "icon" : "check",
    "_id" : "validation",
    "data": [
      {"_id":"@state-warning-text", "value":"#c09853", "type": "color"},
      {"_id":"@state-warning-bg", "value":"#fcf8e3", "type": "color"},
      {"_id":"@state-warning-border", "value":"darken(spin(@state-warning-bg, -10), 3%)", "type": "color"},

      {"_id":"@state-danger-text", "value":"#b94a48", "type": "color"},
      {"_id":"@state-danger-bg", "value":"#f2dede", "type": "color"},
      {"_id":"@state-danger-border", "value":"darken(spin(@state-danger-bg, -10), 3%)", "type": "color"},

      {"_id":"@state-success-text", "value":"#468847", "type": "color"},
      {"_id":"@state-success-bg", "value":"#dff0d8", "type": "color"},
      {"_id":"@state-success-border", "value":"darken(spin(@state-success-bg, -10), 5%)", "type": "color"},

      {"_id":"@state-info-text", "value":"#3a87ad", "type": "color"},
      {"_id":"@state-info-bg", "value":"#d9edf7", "type": "color"},
      {"_id":"@state-info-border", "value":"darken(spin(@state-info-bg, -10), 7%)", "type": "color"}
    ]
  },

  {
    "category": "components",
    "icon" : "th-list",
    "_id" : "tables",
    "data": [

      {"_id":"@table-cell-padding","value": "8px", "type": "text"},
      {"_id":"@table-condensed-cell-padding", "value":"5px", "type": "text"},

      {"_id":"@table-bg","value":"transparent", "type": "color"},
      {"_id":"@table-bg-accent","value":"#f9f9f9", "type": "color"},
      {"_id":"@table-bg-hover","value":"#f5f5f5", "type": "color"},
      {"_id":"@table-bg-active","value":"@table-bg-hover", "type": "color"},

      {"_id":"@table-border-color","value":"#ddd", "type": "color"}

    ]
  },

  {
    "category": "components",
    "icon" : "modal-window",
    "_id" : "jumbotron",
    "data": [
      {"_id":"@jumbotron-padding", "value":"30px", "type": "text"},
      {"_id":"@jumbotron-color", "value":"inherit", "type": "color"},
      {"_id":"@jumbotron-bg", "value":"@gray-lighter", "type": "color"},
      {"_id":"@jumbotron-font-size", "value":"ceil((@font-size-base * 1.5))", "type": "text"}
    ]
  },

  {
    "category": "components",
    "icon" : "file",
    "_id" : "pagination",
    "data": [
      {"_id":"@pagination-bg", "value":"#fff", "type": "color"},
      {"_id":"@pagination-border", "value":"#ddd", "type": "color"},

      {"_id":"@pagination-hover-bg", "value":"@gray-lighter", "type": "color"},
      {"_id":"@pagination-hover-color", "value":"@link-hover-color", "type": "color"},
      {"_id":"@pagination-hover-border", "value":"#ddd", "type": "color"},

      {"_id":"@pagination-active-bg", "value":"@brand-primary", "type": "color"},
      {"_id":"@pagination-active-color", "value":"#fff", "type": "color"},
      {"_id":"@pagination-active-border", "value":"@brand-primary", "type": "color"},

      {"_id":"@pagination-disabled-color", "value":"@gray-light", "type": "color"},
      {"_id":"@pagination-disabled-bg", "value":"#fff", "type": "color"},
      {"_id":"@pagination-disabled-border", "value":"#ddd", "type": "color"},

      {"_id":"@pager-bg", "value":"@pagination-bg", "type": "text"},
      {"_id":"@pager-border", "value":"@pagination-border", "type": "color"},
      {"_id":"@pager-border-radius", "value":"15px", "type": "text"},

      {"_id":"@pager-hover-bg", "value":"@pagination-hover-bg", "type": "color"},
      {"_id":"@pager-active-bg", "value":"@pagination-active-bg", "type": "color"},
      {"_id":"@pager-active-color", "value":"@pagination-active-color", "type": "color"},

      {"_id":"@pager-disabled-color", "value":"@gray-light", "type": "color"}
    ]
  },

  {
    "category": "javascript",
    "icon" : "bullhorn",
    "_id" : "popovers",
      "data":[
        {"_id":"@popover-bg", "value":"#fff", "type": "color"},
        {"_id":"@popover-max-width", "value":"276px", "type": "text"},
        {"_id":"@popover-border-color", "value":"rgba(0,0,0,.2)", "type": "color"},
        {"_id":"@popover-fallback-border-color", "value":"#ccc", "type": "color"},

        {"_id":"@popover-title-bg", "value":"darken(@popover-bg, 3%)", "type": "color"},

        {"_id":"@popover-arrow-width", "value":"10px", "type": "text"},
        {"_id":"@popover-arrow-color", "value":"#fff", "type": "color"},

        {"_id":"@popover-arrow-outer-width", "value":"(@popover-arrow-width + 1)", "type": "text"},
        {"_id":"@popover-arrow-outer-color", "value":"rgba(0,0,0,.25)", "type": "color"},
        {"_id":"@popover-arrow-outer-fallback-color", "value":"#999", "type": "color"}
    ]
  },
  {
    "category": "javascript",
    "icon" : "comment",
    "_id" : "tooltips",
    "data": [
      {"_id":"@tooltip-max-width", "value":"200px", "type": "text"},
      {"_id":"@tooltip-color", "value":"#fff", "type": "color"},
      {"_id":"@tooltip-bg", "value":"#000", "type": "color"},

      {"_id":"@tooltip-arrow-width", "value":"5px", "type": "text"},
      {"_id":"@tooltip-arrow-color", "value":"@tooltip-bg", "type": "color"},
      {"_id":"@tooltip-opacity", "value":".9", "type": "text"}
    ]
  },
  {
    "category": "javascript",
    "icon" : "comment",
    "_id" : "modals",
    "data": [
      {"_id":"@modal-inner-padding", "value":"20px","type":"text"},

      {"_id":"@modal-title-padding", "value":"15px","type":"text"},
      {"_id":"@modal-title-line-height", "value":"@line-height-base","type":"text"},

      {"_id":"@modal-content-bg", "value":"#fff","type":"color"},
      {"_id":"@modal-content-border-color", "value":"rgba(0,0,0,.2)","type":"color"},
      {"_id":"@modal-content-fallback-border-color", "value":"#999","type":"color"},

      {"_id":"@modal-backdrop-bg", "value":"#000","type":"color"},
      {"_id":"@modal-header-border-color", "value":"#e5e5e5","type":"color"},
      {"_id":"@modal-footer-border-color", "value":"@modal-header-border-color","type":"color"},
    ]
  },

  {
    "category": "advanced",
    "icon" : "list-alt",
    "_id" : "listGroup",
      "data":[
        {"_id":"@list-group-bg", "value":"#fff", "type": "color"},
        {"_id":"@list-group-border", "value":"#ddd", "type": "color"},
        {"_id":"@list-group-border-radius", "value":"@border-radius-base", "type": "text"},

        {"_id":"@list-group-hover-bg", "value":"#f5f5f5", "type": "color"},
        {"_id":"@list-group-active-color", "value":"#fff", "type": "color"},
        {"_id":"@list-group-active-bg", "value":"@component-active-bg", "type": "color"},
        {"_id":"@list-group-active-border", "value":"@list-group-active-bg", "type": "color"},
        {"_id":"@list-group-active-text-color", "value":"lighten(@list-group-active-bg, 40%)", "type": "color"},

        {"_id":"@list-group-link-color", "value":"#555", "type": "color"},
        {"_id":"@list-group-link-heading-color", "value":"#333", "type": "color"}

      ]
    },

    {
    "category": "advanced",
    "icon" : "picture",
    "_id" : "sprites",
      "data":[

        {"_id":"@icon-font-path", "value":"'../app/fonts/'", "type": "text"},
        {"_id":"@icon-font-name", "value":"glyphicons-halflings-regular", "type": "text"}
      ]
    },
    {
    "category": "advanced",
    "icon" : "fullscreen",
    "_id" : "screenSizes",
      "data":[
        {"_id":"@screen-xs", "value":"480px","type":"text"},
        {"_id":"@screen-xs-min", "value":"@screen-xs","type":"text"},
        {"_id":"@screen-phone", "value":"@screen-xs-min","type":"text"},

        {"_id":"@screen-sm", "value":"768px","type":"text"},
        {"_id":"@screen-sm-min", "value":"@screen-sm","type":"text"},
        {"_id":"@screen-tablet", "value":"@screen-sm-min","type":"text"},

        {"_id":"@screen-md", "value":"992px","type":"text"},
        {"_id":"@screen-desktop-min", "value":"@screen-md","type":"text"},
        {"_id":"@screen-desktop", "value":"@screen-md-min","type":"text"},

        {"_id":"@screen-lg", "value":"1200px","type":"text"},
        {"_id":"@screen-lg-desktop-min", "value":"@screen-lg","type":"text"},
        {"_id":"@screen-lg-desktop", "value":"@screen-lg-min","type":"text"},

        {"_id":"@screen-xs-max", "value":"(@screen-sm - 1)","type":"text"},
        {"_id":"@screen-sm-max", "value":"(@screen-md - 1)","type":"text"},
        {"_id":"@screen-md-max", "value":"(@screen-lg - 1)","type":"text"},

        {"_id":"@container-tablet", "value":"((720px + @grid-gutter-width))", "type":"text"},
        {"_id":"@container-desktop", "value":"((940px + @grid-gutter-width))", "type":"text"},
        {"_id":"@container-lg-desktop", "value":"((1140px + @grid-gutter-width))", "type":"text"},

        {"_id":"@container-sm", "value":"@container-tablet", "type":"text"},
        {"_id":"@container-md", "value":"@container-desktop", "type":"text"},
        {"_id":"@container-lg", "value":"@container-large-desktop", "type":"text"}
      ]
    },

  {
    "category": "advanced",
    "icon" : "wrench",
    "_id" : "superAdvanced",
    "data": [

      {"_id":"@zindex-navbar", "value":"1000","type":"text"},
      {"_id":"@zindex-dropdown", "value":"1000","type":"text"},
      {"_id":"@zindex-popover", "value":"1010","type":"text"},
      {"_id":"@zindex-tooltip", "value":"1030","type":"text"},
      {"_id":"@zindex-navbar-fixed", "value":"1030","type":"text"},
      {"_id":"@zindex-modal-background", "value":"1040","type":"text"},
      {"_id":"@zindex-modal", "value":"1050","type":"text"},

      {"_id":"@grid-columns", "value":"12","type":"text"},
      {"_id":"@grid-gutter-width", "value":"30px","type":"text"},
      {"_id":"@grid-float-breakpoint", "value":"@screen-tablet","type":"text"},

      {"_id":"@navbar-collapse-max-height", "value":"340px","type":"text"},

      {"_id":"@pager-border-radius", "value": "15px","type":"text"},
      {"_id":"@pager-disabled-color", "value":"@gray-light","type":"color"},

      {"_id":"@alert-padding", "value":"15px","type":"text"},
      {"_id":"@alert-border-radius", "value":"@border-radius-base","type":"text"},
      {"_id":"@alert-link-font-weight", "value":"bold","type":"text"},

      {"_id":"@alert-success-bg", "value":"@state-success-bg","type":"color"},
      {"_id":"@alert-success-text", "value":"@state-success-text","type":"color"},
      {"_id":"@alert-success-border", "value":"@state-success-border","type":"color"},

      {"_id":"@alert-info-bg", "value":"@state-info-bg","type":"color"},
      {"_id":"@alert-info-text", "value":"@state-info-text","type":"color"},
      {"_id":"@alert-info-border", "value":"@state-info-border","type":"color"},

      {"_id":"@alert-warning-bg", "value":"@state-warning-bg","type":"color"},
      {"_id":"@alert-warning-text", "value":"@state-warning-text","type":"color"},
      {"_id":"@alert-warning-border", "value":"@state-warning-border","type":"color"},

      {"_id":"@alert-danger-bg", "value":"@state-danger-bg","type":"color"},
      {"_id":"@alert-danger-text", "value":"@state-danger-text","type":"color"},
      {"_id":"@alert-danger-border", "value":"@state-danger-border","type":"color"},

      {"_id":"@progress-bg", "value":"#f5f5f5","type":"color"},
      {"_id":"@progress-bar-color", "value":"#fff","type":"color"},

      {"_id":"@progress-bar-bg","value":" @brand-primary", "type": "color"},
      {"_id":"@progress-bar-success-bg","value":"@brand-success", "type": "color"},
      {"_id":"@progress-bar-warning-bg","value":"@brand-warning", "type": "color"},
      {"_id":"@progress-bar-danger-bg","value":"@brand-danger", "type": "color"},
      {"_id":"@progress-bar-info-bg","value":"@brand-info", "type": "color"},

      {"_id":"@panel-bg","value":"#fff", "type": "color"},
      {"_id":"@panel-inner-border","value":"#ddd", "type": "color"},
      {"_id":"@panel-border-radius","value":"@border-radius-base", "type": "color"},
      {"_id":"@panel-footer-bg","value":"#f5f5f5", "type": "color"},
      {"_id":"@panel-body-padding","value":"15px", "type": "text"},

      {"_id":"@panel-default-text","value":"@gray-dark", "type": "color"},
      {"_id":"@panel-default-border","value":"#ddd", "type": "color"},
      {"_id":"@panel-default-heading-bg","value":"#f5f5f5", "type": "color"},

      {"_id":"@panel-primary-text","value":"#fff", "type": "color"},
      {"_id":"@panel-primary-border","value":"@brand-primary", "type": "color"},
      {"_id":"@panel-primary-heading-bg","value":"@brand-primary", "type": "color"},

      {"_id":"@panel-success-text","value":"@state-success-text", "type": "color"},
      {"_id":"@panel-success-border","value":"@state-success-border", "type": "color"},
      {"_id":"@panel-success-heading-bg","value":"@state-success-bg", "type": "color"},

      {"_id":"@panel-warning-text","value":"@state-warning-text", "type": "color"},
      {"_id":"@panel-warning-border","value":"@state-warning-border", "type": "color"},
      {"_id":"@panel-warning-heading-bg","value":"@state-warning-bg", "type": "color"},

      {"_id":"@panel-danger-text","value":"@state-danger-text", "type": "color"},
      {"_id":"@panel-danger-border","value":"@state-danger-border", "type": "color"},
      {"_id":"@panel-danger-heading-bg","value":"@state-danger-bg", "type": "color"},

      {"_id":"@panel-info-text","value":"@state-info-text", "type": "color"},
      {"_id":"@panel-info-border","value":"@state-info-border", "type": "color"},
      {"_id":"@panel-info-heading-bg","value":"@state-info-bg", "type": "color"},


      {"_id":"@thumbnail-padding", "value":"4px", "type": "text"},
      {"_id":"@thumbnail-bg", "value":"@body-bg", "type": "color"},
      {"_id":"@thumbnail-border", "value":"#ddd", "type": "color"},
      {"_id":"@thumbnail-border-radius", "value":"@border-radius-base", "type": "color"},

      {"_id":"@thumbnail-caption-color", "value":"@text-color", "type": "color"},
      {"_id":"@thumbnail-caption-padding", "value":"9px", "type": "text"},

      {"_id":"@well-bg", "value":"#f5f5f5", "type": "color"},
      {"_id":"@well-border", "value":" darken(@well-bg, 7%)", "type": "color"},

      {"_id":"@badge-color:", "value":"#fff", "type": "color"},
      {"_id":"@badge-link-hover-color", "value":"#fff", "type": "color"},
      {"_id":"@badge-bg", "value":"@gray-light", "type": "color"},

      {"_id":"@badge-active-color", "value":"@link-color", "type": "color"},
      {"_id":"@badge-active-bg", "value":"#fff", "type": "color"},

      {"_id":"@badge-font-weight", "value":"bold", "type": "text"},
      {"_id":"@badge-line-height", "value":"1", "type": "text"},
      {"_id":"@badge-border-radius", "value":"10px", "type": "text"},

      {"_id":"@breadcrumb-padding-vertical", "value":"8px", "type": "text"},
      {"_id":"@breadcrumb-padding-horizontal", "value":"15px", "type": "text"},

      {"_id":"@breadcrumb-bg", "value":"#f5f5f5", "type": "color"},
      {"_id":"@breadcrumb-color", "value":"#ccc", "type": "color"},
      {"_id":"@breadcrumb-active-color", "value":"@gray-light", "type": "color"},

      {"_id":"@breadcrumb-separator", "value":"/", "type": "text"},

      {"_id":"@carousel-text-shadow", "value":"0 1px 2px rgba(0,0,0,.6)", "type": "color"},
      {"_id":"@carousel-control-color", "value":"#fff", "type": "color"},
      {"_id":"@carousel-control-width", "value":"15%", "type": "text"},
      {"_id":"@carousel-control-opacity", "value":".5", "type": "text"},
      {"_id":"@carousel-control-font-size", "value":"20px", "type": "text"},

      {"_id":"@carousel-indicator-active-bg", "value":"#fff", "type": "color"},
      {"_id":"@carousel-indicator-border-color", "value":"#fff", "type": "color"},

      {"_id":"@carousel-caption-color", "value":"#fff", "type": "color"},

      
      {"_id":"@kbd-color", "value":"#fff", "type": "color"},
      {"_id":"@kbd-bg", "value":"#333", "type": "color"},

      {"_id":"@component-offset-horizontal", "value":"180px", "type":"text"}
    ]
  },
  {
    "category" : "advanced",
    "icon": "trash",
    "_id" : "reset",
    "data": []
  }

];