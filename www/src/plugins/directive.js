export default function (Vue) {
    Vue.directive("height", {
        inserted(el, binding) {
             $(el).height($(window).height() - binding.value)
           
        }
    });
    Vue.directive("color", {
        inserted(el, binding) {
           console.log(1)
           
        }
    });
}