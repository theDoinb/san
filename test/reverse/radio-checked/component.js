// checkbox checked
var san = require('../../..');
var MyComponent = san.defineComponent({
    template: '<div>'
        + '<input san-for="item in list" type="radio" value="{{item}}" checked="{=cValue=}">'
        + '</div>'
});

exports = module.exports = MyComponent;
