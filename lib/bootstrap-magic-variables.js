bootstrap_magic_variables = [
  {
    "category" : "help",
    "icon": "question-sign",
    "keyName" : "howTo",
    "data": []
  },
  {
    "category" : "colors",
    "icon": "tint",
    "keyName" : "brandColors",
    "data": [
      { "key":"@brand-primary", "value":"#428bca", "type": "color"},
      { "key":"@brand-success", "value":"#5cb85c", "type": "color"},
      { "key":"@brand-warning", "value":"#f0ad4e", "type": "color"},
      { "key":"@brand-danger", "value":"#d9534f", "type": "color"},
      { "key":"@brand-info", "value":"#5bc0de", "type": "color"}
    ]
  },

  {
    "category" : "colors",
    "icon": "adjust",
    "keyName" : "textColors",
    "data" : [
      { "key":"@body-bg", "value":"#fff", "type": "color"},
      { "key":"@text-color", "value":"@gray-dark", "type": "color"},
      { "key":"@headings-color", "value":"inherit", "type": "text"},
      { "key":"@link-color", "value":"@brand-primary", "type": "color"},
      { "key":"@link-hover-color", "value": "darken(@link-color, 15%)", "type": "color"},

      {"key":"@code-color", "value":"#c7254e", "type": "color"},
      {"key":"@code-bg", "value":"#f9f2f4", "type": "color"},

      {"key":"@pre-bg", "value":"#f5f5f5", "type":"color"},
      {"key":"@pre-color", "value":"@gray-dark", "type":"color"},
      {"key":"@pre-border-color", "value":"#ccc", "type":"color"},
      {"key":"@pre-scrollable-max-height", "value":"340px", "type":"text"},

      {"key":"@text-muted", "value":"@gray-light", "type":"color"},
      {"key":"@abbr-border-color", "value":"@gray-light", "type":"color"},
      {"key":"@headings-small-color", "value":"@gray-light", "type":"color"},
      {"key":"@blockquote-small-color", "value":"@gray-light", "type":"color"},
      {"key":"@blockquote-border-color", "value":"@gray-lighter", "type":"color"},
      {"key":"@page-header-border-color", "value":"@gray-lighter", "type":"color"},

      {"key":"@hr-border", "value":"@gray-lighter", "type":"color"}

    ]
  },

  {
    "category" : "colors",
    "icon" : "menu-hamburger",
    "keyName" : "navBar",
    "data": [

      {"key":"@navbar-height","value": "50px", "type":"text"},
      {"key":"@navbar-margin-bottom", "value" :"@line-height-computed", "type":"color"},
      {"key":"@navbar-default-color", "value" :"#777", "type":"color"},
      {"key":"@navbar-default-bg", "value" :"#f8f8f8", "type":"color"},
      {"key":"@navbar-default-border", "value" :"darken(@navbar-default-bg, 6.5%)", "type":"color"},
      {"key":"@navbar-border-radius", "value" :"@border-radius-base", "type":"text"},
      {"key":"@navbar-padding-horizontal", "value" :"floor(@grid-gutter-width / 2)", "type":"text"},
      {"key":"@navbar-padding-vertical","value":"((@navbar-height - @line-height-computed) / 2)", "type":"text"},

      {"key":"@navbar-default-link-color", "value":"#777", "type":"color"},
      {"key":"@navbar-default-link-hover-color", "value":"#333", "type":"color"},
      {"key":"@navbar-default-link-hover-bg", "value":"transparent", "type":"color"},
      {"key":"@navbar-default-link-active-color", "value":" #555", "type":"color"},
      {"key":"@navbar-default-link-active-bg", "value":"darken(@navbar-default-bg, 6.5%)", "type":"color"},
      {"key":"@navbar-default-link-disabled-color", "value":" #ccc", "type":"color"},
      {"key":"@navbar-default-link-disabled-bg", "value":"transparent", "type":"color"},

      {"key":"@navbar-default-brand-color", "value":"@navbar-default-link-color", "type":"color"},
      {"key":"@navbar-default-brand-hover-color", "value":"darken(@navbar-default-link-color, 10%)", "type":"color"},
      {"key":"@navbar-default-brand-hover-bg", "value":"transparent", "type":"color"},

      {"key":"@navbar-default-toggle-hover-bg", "value":"#ddd", "type":"color"},
      {"key":"@navbar-default-toggle-icon-bar-bg", "value":"#888", "type":"color"},
      {"key":"@navbar-default-toggle-border-color", "value":"#ddd", "type":"color"},

      {"key":"@navbar-inverse-color", "value":"@gray-light","type":"color"},
      {"key":"@navbar-inverse-bg", "value":"#222","type":"color"},
      {"key":"@navbar-inverse-border", "value": "darken(@navbar-inverse-bg, 10%)","type":"color"},

      {"key":"@navbar-inverse-link-color", "value":"@gray-light","type":"color"},
      {"key":"@navbar-inverse-link-hover-color", "value":"#fff","type":"color"},
      {"key":"@navbar-inverse-link-hover-bg", "value":"transparent","type":"color"},
      {"key":"@navbar-inverse-link-active-color", "value":"@navbar-inverse-link-hover-color","type":"color"},
      {"key":"@navbar-inverse-link-active-bg", "value":"darken(@navbar-inverse-bg, 10%)","type":"color"},
      {"key":"@navbar-inverse-link-disabled-color", "value": "#444","type":"color"},
      {"key":"@navbar-inverse-link-disabled-bg", "value":"transparent","type":"color"},
      {"key":"@navbar-inverse-brand-color", "value":"@navbar-inverse-link-color","type":"color"},
      {"key":"@navbar-inverse-brand-hover-color", "value":"#fff","type":"color"},
      {"key":"@navbar-inverse-brand-hover-bg", "value":"transparent","type":"color"},

      {"key":"@navbar-inverse-toggle-hover-bg", "value":"#333","type":"color"},
      {"key":"@navbar-inverse-toggle-icon-bar-bg", "value":"#fff","type":"color"},
      {"key":"@navbar-inverse-toggle-border-color", "value":"#333","type":"color"},

    ]
  },

  {
    "category" : "colors",
    "icon" : "collapse-down",
    "keyName" : "dropdowns",
      "data": [
      {"key":"@dropdown-bg", "value":"#fff", "type": "color"},
      {"key":"@dropdown-border", "value":"rgba(0,0,0,.15)", "type": "text"},
      {"key":"@dropdown-divider-bg", "value":"#e5e5e5", "type": "color"},

      {"key":"@dropdown-link-active-color", "value":"#fff", "type": "color"},
      {"key":"@dropdown-link-active-bg", "value":"@component-active-bg", "type": "color"},

      {"key":"@dropdown-link-color", "value":"@gray-dark", "type":"color"},
      {"key":"@dropdown-link-hover-color", "value":"#fff", "type": "color"},
      {"key":"@dropdown-link-hover-bg", "value":"@dropdown-link-active-bg", "type": "color"},

      {"key":"@dropdown-link-disabled-color", "value":"@gray-light", "type": "color"},
      {"key":"@dropdown-header-color", "value":"@gray-light", "type": "color"},
      {"key":"@dropdown-caret-color", "value":"#000", "type": "color"}

    ]
  },

  {
    "category" : "colors",
    "icon" : "list",
    "keyName" : "navTabs",
    "data": [

      {"key":"@nav-link-padding", "value":"10px 15px", "type":"text"},
      {"key":"@nav-link-hover-bg", "value":"@gray-lighter", "type":"color"},

      {"key":"@nav-disabled-link-color", "value":"@gray-light", "type":"color"},
      {"key":"@nav-disabled-link-hover-color", "value":"@gray-light", "type":"color"},

      {"key":"@nav-tabs-border-color", "value":"#ddd", "type":"color"},

      {"key":"@nav-tabs-link-hover-border-color", "value":"@gray-lighter", "type":"color"},

      {"key":"@nav-tabs-active-link-hover-bg", "value":"@body-bg", "type":"color"},
      {"key":"@nav-tabs-active-link-hover-color", "value":"@gray", "type":"color"},
      {"key":"@nav-tabs-active-link-hover-border-color", "value":"#ddd", "type":"color"},

      {"key":"@nav-tabs-justified-link-border-color", "value": "#ddd", "type":"color"},
      {"key":"@nav-tabs-justified-active-link-border-color", "value":"@body-bg", "type":"color"},

      {"key":"@nav-pills-border-radius","value":"@border-radius-base", "type":"text"},
      {"key":"@nav-pills-active-link-hover-bg","value":"@component-active-bg", "type":"color"},
      {"key":"@nav-pills-active-link-hover-color","value":"#fff", "type":"color"}

    ]
  },

  {
    "category": "advancedColors",
    "icon" : "hand-up",
    "keyName" : "buttons",
    "data":[

      {"key":"@btn-font-weight", "value":"normal", "type":"text"},

      {"key":"@btn-default-color", "value":"#333", "type":"color"},
      {"key":"@btn-default-bg", "value":"#fff", "type":"color"},
      {"key":"@btn-default-border", "value":"#ccc", "type":"color"},

      {"key":"@btn-primary-color", "value":"#fff", "type":"color"},
      {"key":"@btn-primary-bg", "value":"@brand-primary", "type":"color"},
      {"key":"@btn-primary-border", "value":"darken(@btn-primary-bg, 5%)", "type":"color"},

      {"key":"@btn-success-color", "value":"#fff", "type":"color"},
      {"key":"@btn-success-bg", "value":"@brand-success", "type":"color"},
      {"key":"@btn-success-border", "value":"darken(@btn-success-bg, 5%)", "type":"color"},

      {"key":"@btn-warning-color", "value":"#fff", "type":"color"},
      {"key":"@btn-warning-bg", "value":"@brand-warning", "type":"color"},
      {"key":"@btn-warning-border", "value":"darken(@btn-warning-bg, 5%)", "type":"color"},

      {"key":"@btn-danger-color", "value":"#fff", "type":"color"},
      {"key":"@btn-danger-bg", "value":"@brand-danger", "type":"color"},
      {"key":"@btn-danger-border", "value":"darken(@btn-danger-bg, 5%)", "type":"color"},

      {"key":"@btn-info-color", "value":"#fff", "type":"color"},
      {"key":"@btn-info-bg", "value":"@brand-info", "type":"color"},
      {"key":"@btn-info-border", "value":"darken(@btn-info-bg, 5%)", "type":"color"},

      {"key":"@btn-link-disabled-color", "value":"@gray-light", "type":"color"},

      {"key":"@close-color", "value":"#000", "type": "color"},
      {"key":"@close-font-weight", "value":"bold", "type": "text"},
      {"key":"@close-text-shadow", "value":"0 1px 0 #fff", "type": "text"},

    ]
  },

  {
    "category": "advancedColors",
    "icon" : "check",
    "keyName" : "formStates",
    "data": [
      {"key":"@state-warning-text", "value":"#c09853", "type": "color"},
      {"key":"@state-warning-bg", "value":"#fcf8e3", "type": "color"},
      {"key":"@state-warning-border", "value":"darken(spin(@state-warning-bg, -10), 3%)", "type": "color"},

      {"key":"@state-danger-text", "value":"#b94a48", "type": "color"},
      {"key":"@state-danger-bg", "value":"#f2dede", "type": "color"},
      {"key":"@state-danger-border", "value":"darken(spin(@state-danger-bg, -10), 3%)", "type": "color"},

      {"key":"@state-success-text", "value":"#468847", "type": "color"},
      {"key":"@state-success-bg", "value":"#dff0d8", "type": "color"},
      {"key":"@state-success-border", "value":"darken(spin(@state-success-bg, -10), 5%)", "type": "color"},

      {"key":"@state-info-text", "value":"#3a87ad", "type": "color"},
      {"key":"@state-info-bg", "value":"#d9edf7", "type": "color"},
      {"key":"@state-info-border", "value":"darken(spin(@state-info-bg, -10), 7%)", "type": "color"}
    ]
  },

  {
    "category": "advancedColors",
    "icon" : "equalizer",
    "keyName" : "grays",
    "data": [
      { "key":"@gray-darker", "value":"#222222", "type": "color"},
      { "key":"@gray-dark", "value":"#333333", "type": "color"},
      { "key":"@gray", "value":"#555555", "type": "color"},
      { "key":"@gray-light", "value":"#999999", "type": "color"},
      { "key":"@gray-lighter", "value":"#eeeeee", "type": "color"}
    ]
  },

  {
    "category": "typography",
    "icon" : "text-background",
    "keyName" : "typography",
    "data": [

      {"key":"@font-family-sans-serif", "value":"Open Sans", "type": "font"},
      {"key":"@font-family-serif", "value":"PT Serif", "type": "font"},
      {"key":"@font-family-monospace", "value":"Monaco", "type": "font"},
      {"key":"@font-family-base", "value":"@font-family-sans-serif", "type": "text"},

      {"key":"@font-size-base", "value":"14px", "type": "text"},
      {"key":"@font-size-large", "value":"ceil(@font-size-base * 1.25)", "type": "text"},
      {"key":"@font-size-small", "value":"ceil(@font-size-base * 0.85)", "type": "text"},

      {"key":"@font-size-h1", "value":"floor((@font-size-base * 2.6))", "type": "text"},
      {"key":"@font-size-h2", "value":"floor((@font-size-base * 2.15))", "type": "text"},
      {"key":"@font-size-h3", "value":"floor((@font-size-base * 1.7))", "type": "text"},
      {"key":"@font-size-h4", "value":"floor((@font-size-base * 1.25))", "type": "text"},
      {"key":"@font-size-h5", "value":"@font-size-base", "type": "text"},
      {"key":"@font-size-h6", "value":"floor((@font-size-base * 0.85))", "type": "text"},

      {"key":"@line-height-base", "value":"1.428571429", "type": "text"},
      {"key":"@line-height-computed", "value":"floor(@font-size-base * @line-height-base)", "type": "text"},
      {"key":"@line-height-large", "value":"1.33","type":"text"},
      {"key":"@line-height-small", "value":"1.5","type":"text"},

      {"key":"@headings-font-family", "value":"@font-family-base", "type": "text"},
      {"key":"@headings-font-weight", "value":"500", "type": "text"},
      {"key":"@headings-line-height", "value":"1.1", "type": "text"}
    ]
  },

  {
    "category": "scaffolding",
    "icon" : "sound-stereo",
    "keyName" : "padding",
    "data": [
      
      {"key":"@padding-base-vertical", "value":"6px", "type": "text"},
      {"key":"@padding-base-horizontal", "value":"12px", "type": "text"},

      {"key":"@padding-large-vertical", "value":"10px", "type": "text"},
      {"key":"@padding-large-horizontal", "value":"16px", "type": "text"},

      {"key":"@padding-small-vertical", "value":"5px", "type": "text"},
      {"key":"@padding-small-horizontal", "value":"10px", "type": "text"},

      {"key":"@component-active-bg", "value":"@brand-primary", "type": "text"}
    ]
  },

  {
    "category": "scaffolding",
    "icon" : "unchecked",
    "keyName" : "borderRadius",
    "data": [

      {"key":"@border-radius-base", "value":"4px", "type": "text"},
      {"key":"@border-radius-large", "value":"6px", "type": "text"},
      {"key":"@border-radius-small", "value":"3px", "type": "text"},

      {"key":"@component-active-bg", "value":"@brand-primary", "type": "text"}
    ]
  },

  {
    "category": "forms",
    "icon" : "tasks",
    "keyName" : "forms",
    "data": [
      {"key":"@input-bg", "value":"#fff", "type": "color"},
      {"key":"@input-bg-disabled", "value":"@gray-lighter", "type": "color"},

      {"key":"@input-color", "value":"@gray", "type": "color"},
      {"key":"@input-border", "value":"#ccc", "type": "color"},
      {"key":"@input-border-radius", "value":"@border-radius-base", "type": "text"},

      {"key":"@input-color-placeholder", "value":"@gray-light", "type": "color"},

      {"key":"@input-height-base", "value":"(@line-height-computed + (@padding-base-vertical * 2) + 2)", "type": "text"},
      {"key":"@input-height-large", "value":"(floor(@font-size-large * @line-height-large) + (@padding-large-vertical * 2) + 2)", "type": "text"},
      {"key":"@input-height-small", "value":"(floor(@font-size-small * @line-height-small) + (@padding-small-vertical * 2) + 2)", "type": "text"},

      {"key":"@legend-color", "value":"@gray-dark", "type": "color"},
      {"key":"@legend-border-color", "value":"#e5e5e5", "type": "color"},

      {"key":"@input-group-addon-bg", "value":"@gray-lighter", "type": "color"},
      {"key":"@input-group-addon-border-color", "value":"@input-border", "type": "color"}
    ]
  },

  {
    "category": "tables",
    "icon" : "th-list",
    "keyName" : "tables",
    "data": [
      {"key":"@table-cell-padding", "value":"8px", "type": "text"},
      {"key":"@table-condensed-cell-padding", "value":"5px", "type": "text"},

      {"key":"@table-cell-padding","value": "8px", "type": "text"},
      {"key":"@table-condensed-cell-padding", "value":"5px", "type": "text"},

      {"key":"@table-bg","value":"transparent", "type": "color"},
      {"key":"@table-bg-accent","value":"#f9f9f9", "type": "color"},
      {"key":"@table-bg-hover","value":"#f5f5f5", "type": "color"},
      {"key":"@table-bg-active","value":"@table-bg-hover", "type": "color"},

      {"key":"@table-border-color","value":"#ddd", "type": "color"}

    ]
  },

  {
    "category": "jumbotron",
    "icon" : "modal-window",
    "keyName" : "jumbotron",
    "data": [
      {"key":"@jumbotron-padding", "value":"30px", "type": "text"},
      {"key":"@jumbotron-color", "value":"inherit", "type": "color"},
      {"key":"@jumbotron-bg", "value":"@gray-lighter", "type": "color"},
      {"key":"@jumbotron-font-size", "value":"ceil((@font-size-base * 1.5))", "type": "color"}
    ]
  },

  {
    "category": "advanced",
    "icon" : "file",
    "keyName" : "pagination",
    "data": [
      {"key":"@pagination-bg", "value":"#fff", "type": "color"},
      {"key":"@pagination-border", "value":"#ddd", "type": "color"},

      {"key":"@pagination-hover-bg", "value":"@gray-lighter", "type": "color"},
      {"key":"@pagination-hover-color", "value":"@link-hover-color", "type": "color"},
      {"key":"@pagination-hover-border", "value":"#ddd", "type": "color"},

      {"key":"@pagination-active-bg", "value":"@brand-primary", "type": "color"},
      {"key":"@pagination-active-color", "value":"#fff", "type": "color"},
      {"key":"@pagination-active-border", "value":"@brand-primary", "type": "color"},

      {"key":"@pagination-disabled-color", "value":"@gray-light", "type": "color"},
      {"key":"@pagination-disabled-bg", "value":"#fff", "type": "color"},
      {"key":"@pagination-disabled-border", "value":"#ddd", "type": "color"},

      {"key":"@pager-bg", "value":"@pagination-bg", "type": "text"},
      {"key":"@pager-border", "value":"@pagination-border", "type": "text"},
      {"key":"@pager-border-radius", "value":"15px", "type": "text"},

      {"key":"@pager-hover-bg", "value":"@pagination-hover-bg", "type": "text"},
      {"key":"@pager-active-bg", "value":"@pagination-active-bg", "type": "text"},
      {"key":"@pager-active-color", "value":"@pagination-active-color", "type": "text"},
      {"key":"@pager-bg", "value":"@pagination-bg", "type": "text"},

      {"key":"@pager-disabled-color", "value":"@gray-light", "type": "color"}

    ]
  },

    {

      "category": "advanced",
      "icon" : "comment",
      "keyName" : "tooltip",
      "data": [
        {"key":"@tooltip-max-width", "value":"200px", "type": "text"},
        {"key":"@tooltip-color", "value":"#fff", "type": "color"},
        {"key":"@tooltip-bg", "value":"#000", "type": "color"},

        {"key":"@tooltip-arrow-width", "value":"5px", "type": "text"},
        {"key":"@tooltip-arrow-color", "value":"@tooltip-bg", "type": "color"},
        {"key":"@tooltip-opacity", "value":".9", "type": "text"}
      ]
    },

    {
    "category": "advanced",
    "icon" : "bullhorn",
    "keyName" : "popover",
      "data":[
        {"key":"@popover-bg", "value":"#fff", "type": "color"},
        {"key":"@popover-max-width", "value":"276px", "type": "text"},
        {"key":"@popover-border-color", "value":"rgba(0,0,0,.2)", "type": "color"},
        {"key":"@popover-fallback-border-color", "value":"#ccc", "type": "color"},

        {"key":"@popover-title-bg", "value":"darken(@popover-bg, 3%)", "type": "color"},

        {"key":"@popover-arrow-width", "value":"10px", "type": "text"},
        {"key":"@popover-arrow-color", "value":"#fff", "type": "color"},

        {"key":"@popover-arrow-outer-width", "value":"(@popover-arrow-width + 1)", "type": "color"},
        {"key":"@popover-arrow-outer-color", "value":"rgba(0,0,0,.25)", "type": "color"},
        {"key":"@popover-arrow-outer-fallback-color", "value":"#999", "type": "color"}
      ]
    },

    {
    "category": "advanced",
    "icon" : "list-alt",
    "keyName" : "listGroup",
      "data":[
        {"key":"@list-group-bg", "value":"#fff", "type": "color"},
        {"key":"@list-group-border", "value":"#ddd", "type": "color"},
        {"key":"@list-group-border-radius", "value":"@border-radius-base", "type": "text"},

        {"key":"@list-group-hover-bg", "value":"#f5f5f5", "type": "color"},
        {"key":"@list-group-active-color", "value":"#fff", "type": "color"},
        {"key":"@list-group-active-bg", "value":"@component-active-bg", "type": "color"},
        {"key":"@list-group-active-border", "value":"@list-group-active-bg", "type": "color"},
        {"key":"@list-group-active-text-color", "value":"lighten(@list-group-active-bg, 40%)", "type": "color"},

        {"key":"@list-group-link-color", "value":"#555", "type": "color"},
        {"key":"@list-group-link-heading-color", "value":"#333", "type": "color"}

      ]
    },

    {
    "category": "advanced",
    "icon" : "picture",
    "keyName" : "sprites",
      "data":[

        {"key":"@icon-font-path", "value":"'../app/fonts/'", "type": "text"},
        {"key":"@icon-font-name", "value":"glyphicons-halflings-regular", "type": "text"}
      ]
    },
    {
    "category": "advanced",
    "icon" : "fullscreen",
    "keyName" : "screenSizes",
      "data":[
        {"key":"@screen-xs", "value":"480px","type":"text"},
        {"key":"@screen-xs-min", "value":"@screen-xs","type":"text"},
        {"key":"@screen-phone", "value":"@screen-xs-min","type":"text"},

        {"key":"@screen-sm", "value":"768px","type":"text"},
        {"key":"@screen-sm-min", "value":"@screen-sm","type":"text"},
        {"key":"@screen-tablet", "value":"@screen-sm-min","type":"text"},

        {"key":"@screen-md", "value":"992px","type":"text"},
        {"key":"@screen-desktop-min", "value":"@screen-md","type":"text"},
        {"key":"@screen-desktop", "value":"@screen-md-min","type":"text"},

        {"key":"@screen-lg", "value":"1200px","type":"text"},
        {"key":"@screen-lg-desktop-min", "value":"@screen-lg","type":"text"},
        {"key":"@screen-lg-desktop", "value":"@screen-lg-min","type":"text"},

        {"key":"@screen-xs-max", "value":"(@screen-sm - 1)","type":"text"},
        {"key":"@screen-sm-max", "value":"(@screen-md - 1)","type":"text"},
        {"key":"@screen-md-max", "value":"(@screen-lg - 1)","type":"text"},

        {"key":"@container-tablet", "value":"((720px + @grid-gutter-width))", "type":"text"},
        {"key":"@container-desktop", "value":"((940px + @grid-gutter-width))", "type":"text"},
        {"key":"@container-lg-desktop", "value":"((1140px + @grid-gutter-width))", "type":"text"},

        {"key":"@container-sm", "value":"@container-tablet", "type":"text"},
        {"key":"@container-md", "value":"@container-desktop", "type":"text"},
        {"key":"@container-lg", "value":"@container-large-desktop", "type":"text"}
      ]
    },

  {
    "category": "advanced",
    "icon" : "wrench",
    "keyName" : "superAdvanced",
    "data": [

      {"key":"@zindex-navbar", "value":"1000","type":"text"},
      {"key":"@zindex-dropdown", "value":"1000","type":"text"},
      {"key":"@zindex-popover", "value":"1010","type":"text"},
      {"key":"@zindex-tooltip", "value":"1030","type":"text"},
      {"key":"@zindex-navbar-fixed", "value":"1030","type":"text"},
      {"key":"@zindex-modal-background", "value":"1040","type":"text"},
      {"key":"@zindex-modal", "value":"1050","type":"text"},

      {"key":"@grid-columns", "value":"12","type":"text"},
      {"key":"@grid-gutter-width", "value":"30px","type":"text"},
      {"key":"@grid-float-breakpoint", "value":"@screen-tablet","type":"text"},

      {"key":"@navbar-collapse-max-height", "value":"340px","type":"text"},

      {"key":"@pager-border-radius", "value": "15px","type":"color"},
      {"key":"@pager-disabled-color", "value":"@gray-light","type":"color"},

      {"key":"@modal-inner-padding", "value":"20px","type":"text"},

      {"key":"@modal-title-padding", "value":"15px","type":"text"},
      {"key":"@modal-title-line-height", "value":"@line-height-base","type":"color"},

      {"key":"@modal-content-bg", "value":"#fff","type":"color"},
      {"key":"@modal-content-border-color", "value":"rgba(0,0,0,.2)","type":"color"},
      {"key":"@modal-content-fallback-border-color", "value":"#999","type":"color"},

      {"key":"@modal-backdrop-bg", "value":"#000","type":"color"},
      {"key":"@modal-header-border-color", "value":"#e5e5e5","type":"color"},
      {"key":"@modal-footer-border-color", "value":"@modal-header-border-color","type":"color"},
      {"key":"@alert-padding", "value":"15px","type":"color"},
      {"key":"@alert-border-radius", "value":"@border-radius-base","type":"text"},
      {"key":"@alert-link-font-weight", "value":"bold","type":"text"},

      {"key":"@alert-success-bg", "value":"@state-success-bg","type":"color"},
      {"key":"@alert-success-text", "value":"@state-success-text","type":"color"},
      {"key":"@alert-success-border", "value":"@state-success-border","type":"color"},

      {"key":"@alert-info-bg", "value":"@state-info-bg","type":"color"},
      {"key":"@alert-info-text", "value":"@state-info-text","type":"color"},
      {"key":"@alert-info-border", "value":"@state-info-border","type":"color"},

      {"key":"@alert-warning-bg", "value":"@state-warning-bg","type":"color"},
      {"key":"@alert-warning-text", "value":"@state-warning-text","type":"color"},
      {"key":"@alert-warning-border", "value":"@state-warning-border","type":"color"},

      {"key":"@alert-danger-bg", "value":"@state-danger-bg","type":"color"},
      {"key":"@alert-danger-text", "value":"@state-danger-text","type":"color"},
      {"key":"@alert-danger-border", "value":"@state-danger-border","type":"color"},

      {"key":"@progress-bg", "value":"#f5f5f5","type":"color"},
      {"key":"@progress-bar-color", "value":"#fff","type":"color"},

      {"key":"@progress-bar-bg","value":" @brand-primary", "type": "color"},
      {"key":"@progress-bar-success-bg","value":"@brand-success", "type": "color"},
      {"key":"@progress-bar-warning-bg","value":"@brand-warning", "type": "color"},
      {"key":"@progress-bar-danger-bg","value":"@brand-danger", "type": "color"},
      {"key":"@progress-bar-info-bg","value":"@brand-info", "type": "color"},

      {"key":"@panel-bg","value":"#fff", "type": "color"},
      {"key":"@panel-inner-border","value":"#ddd", "type": "color"},
      {"key":"@panel-border-radius","value":"@border-radius-base", "type": "color"},
      {"key":"@panel-footer-bg","value":"#f5f5f5", "type": "color"},
      {"key":"@panel-body-padding","value":"15px", "type": "text"},

      {"key":"@panel-default-text","value":"@gray-dark", "type": "color"},
      {"key":"@panel-default-border","value":"#ddd", "type": "color"},
      {"key":"@panel-default-heading-bg","value":"#f5f5f5", "type": "color"},

      {"key":"@panel-primary-text","value":"#fff", "type": "color"},
      {"key":"@panel-primary-border","value":"@brand-primary", "type": "color"},
      {"key":"@panel-primary-heading-bg","value":"@brand-primary", "type": "color"},

      {"key":"@panel-success-text","value":"@state-success-text", "type": "color"},
      {"key":"@panel-success-border","value":"@state-success-border", "type": "color"},
      {"key":"@panel-success-heading-bg","value":"@state-success-bg", "type": "color"},

      {"key":"@panel-warning-text","value":"@state-warning-text", "type": "color"},
      {"key":"@panel-warning-border","value":"@state-warning-border", "type": "color"},
      {"key":"@panel-warning-heading-bg","value":"@state-warning-bg", "type": "color"},

      {"key":"@panel-danger-text","value":"@state-danger-text", "type": "color"},
      {"key":"@panel-danger-border","value":"@state-danger-border", "type": "color"},
      {"key":"@panel-danger-heading-bg","value":"@state-danger-bg", "type": "color"},

      {"key":"@panel-info-text","value":"@state-info-text", "type": "color"},
      {"key":"@panel-info-border","value":"@state-info-border", "type": "color"},
      {"key":"@panel-info-heading-bg","value":"@state-info-bg", "type": "color"},


      {"key":"@thumbnail-padding", "value":"4px", "type": "text"},
      {"key":"@thumbnail-bg", "value":"@body-bg", "type": "color"},
      {"key":"@thumbnail-border", "value":"#ddd", "type": "color"},
      {"key":"@thumbnail-border-radius", "value":"@border-radius-base", "type": "color"},

      {"key":"@thumbnail-caption-color", "value":"@text-color", "type": "color"},
      {"key":"@thumbnail-caption-padding", "value":"9px", "type": "text"},

      {"key":"@well-bg", "value":"#f5f5f5", "type": "color"},
      {"key":"@well-border", "value":" darken(@well-bg, 7%)", "type": "color"},

      {"key":"@badge-color:", "value":"#fff", "type": "color"},
      {"key":"@badge-link-hover-color", "value":"#fff", "type": "color"},
      {"key":"@badge-bg", "value":"@gray-light", "type": "color"},

      {"key":"@badge-active-color", "value":"@link-color", "type": "color"},
      {"key":"@badge-active-bg", "value":"#fff", "type": "color"},

      {"key":"@badge-font-weight", "value":"bold", "type": "text"},
      {"key":"@badge-line-height", "value":"1", "type": "text"},
      {"key":"@badge-border-radius", "value":"10px", "type": "text"},

      {"key":"@breadcrumb-padding-vertical", "value":"8px", "type": "text"},
      {"key":"@breadcrumb-padding-horizontal", "value":"15px", "type": "text"},

      {"key":"@breadcrumb-bg", "value":"#f5f5f5", "type": "color"},
      {"key":"@breadcrumb-color", "value":"#ccc", "type": "color"},
      {"key":"@breadcrumb-active-color", "value":"@gray-light", "type": "color"},

      {"key":"@breadcrumb-separator", "value":"/", "type": "text"},

      {"key":"@carousel-text-shadow", "value":"0 1px 2px rgba(0,0,0,.6)", "type": "color"},
      {"key":"@carousel-control-color", "value":"#fff", "type": "color"},
      {"key":"@carousel-control-width", "value":"15%", "type": "text"},
      {"key":"@carousel-control-opacity", "value":".5", "type": "text"},
      {"key":"@carousel-control-font-size", "value":"20px", "type": "text"},

      {"key":"@carousel-indicator-active-bg", "value":"#fff", "type": "color"},
      {"key":"@carousel-indicator-border-color", "value":"#fff", "type": "color"},

      {"key":"@carousel-caption-color", "value":"#fff", "type": "color"},

      
      {"key":"@kbd-color", "value":"#fff", "type": "color"},
      {"key":"@kbd-bg", "value":"#333", "type": "color"},

      {"key":"@component-offset-horizontal", "value":"180px", "type":"text"}

    ]
  },
  {
    "category" : "advanced",
    "icon": "trash",
    "keyName" : "reset",
    "data": []
  }

];