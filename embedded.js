
function get_query_param(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    var is_en = get_query_param('lan') == 'en'
    if (is_en) {
        //如果是英文，则调到英文页面（用来mas review mother fucker!!!!)
        window.location.href = 'embedded-en.html'
    }
})