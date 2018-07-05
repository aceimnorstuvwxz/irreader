
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
    init_recommend_targets()
})

var g_targets = [
    {
        name: "反派影评",
        category: "播客节目",
        desc: "党同伐异，猛于炮火",
        icon: "http://fdfs.xmcdn.com/group12/M04/5B/B5/wKgDXFcodQTzLHUqAAPp8Gu1lRY954.jpg",
        link: "likefeed://add-remote?name=%E5%8F%8D%E6%B4%BE%E5%BD%B1%E8%AF%84&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F4127591.xml&type=1&csser=&min_len=0&desc=%E6%AC%A2%E8%BF%8E%E5%85%B3%E6%B3%A8%E2%80%9C%E5%8F%8D%E6%B4%BE%E5%BD%B1%E8%AF%84%E2%80%9D%E5%85%AC%E4%BC%97%E5%8F%B7%EF%BC%8C%E6%9C%AC%E8%8A%82%E7%9B%AE%E5%9C%A8%E6%AD%A4%E5%B9%B3%E5%8F%B0%E4%B8%8A%E5%8F%AA%E6%94%BE%E5%87%BA1%2F4%E7%9A%84%E8%8A%82%E7%9B%AE%EF%BC%81%E5%85%B6%E5%AE%83%E8%8A%82%E7%9B%AE%E5%8A%A0%E5%85%AC%E5%8F%B7%EF%BC%8C%E5%8F%AF%E5%90%AC%E5%88%B030%E5%88%86%E9%92%9F%E8%A1%8C%E4%B8%9A%E7%B1%BB%E8%B0%88%E8%AF%9D%E8%8A%82%E7%9B%AE%E2%80%9C%E5%8F%8D%E6%B4%BE%E9%A9%AC%E5%90%8E%E7%82%AE%E2%80%9D%E5%8F%8A%E7%9F%AD%E8%AF%AD%E9%9F%B3%E8%AF%84%E7%94%B5%E5%BD%B1%E7%9A%84%E2%80%9C%E7%94%B5%E5%BD%B1%E8%80%B3%E6%97%81%E9%A3%8E%E2%80%9D%EF%BC%8C%E5%8F%A6%E5%A4%96%E8%BF%98%E5%8F%AF%E8%8E%B7%E5%8F%96%E8%8A%82%E7%9B%AE%E4%B8%AD%E6%8F%90%E5%8F%8A%E7%9A%84%E7%94%B5%E5%BD%B1%E7%89%87%E5%8D%95%E5%8F%8A%E5%85%B6%E5%AE%83%E5%BB%B6%E5%B1%95%E4%BF%A1%E6%81%AF%E3%80%82%E6%89%B9%E8%AF%84%E4%B8%8D%E8%87%AA%E7%94%B1%EF%BC%8C%E5%88%99%E8%B5%9E%E7%BE%8E%E6%97%A0%E6%84%8F%E4%B9%89%E3%80%82%E5%85%9A%E5%90%8C%E4%BC%90%E5%BC%82%EF%BC%8C%E7%8C%9B%E4%BA%8E%E7%82%AE%E7%81%AB%E3%80%82&icon=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup12%2FM04%2F5B%2FB5%2FwKgDXFcodQTzLHUqAAPp8Gu1lRY954.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    }, 
    {
        name: "百度灵异吧",
        category: "娱乐",
        desc: "今天你见鬼了吗？不要在半夜对着镜子梳头发。",
        icon: "http://fate2.oss-cn-shanghai.aliyuncs.com/feed-icons/lingyi.jpg",
        link: "likefeed://add-remote?name=%E7%99%BE%E5%BA%A6%E7%81%B5%E5%BC%82%E5%90%A7&source=https%3A%2F%2Ftieba.baidu.com%2Fmo%2Fq---30F2F82E0A18AEEA9E81E4665CCFCEBF%3AFG%3D1--1-3-0--2--wapp_1529813376881_966%2Fm%3Fword%3D%25E7%2581%25B5%25E5%25BC%2582%26tn6%3DbdISP%26tn4%3DbdKSW%26tn7%3DbdPSB%26lp%3D1050%26sub4%3D%25E8%25BF%259B%25E5%2590%25A7%26referer%3Dwapp.baidu.com%26pn%3D0%26&type=0&csser=.i%20a%2C.ti_item&min_len=0&desc=%E9%9A%BE%E9%81%93%E7%9C%9F%E7%9A%84%E6%9C%89%E9%AC%BC%EF%BC%9F&icon=http%3A%2F%2Ffate2.oss-cn-shanghai.aliyuncs.com%2Ffeed-icons%2Flingyi.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    }
]

function init_recommend_targets(){
    g_targets.forEach((target)=>{
        var new_ele = $('#target_template').clone()
        new_ele.removeAttr('id')
        new_ele.find('img').attr("src", target.icon)
        new_ele.find('.target-item-name').text(target.name)
        new_ele.find('.target-item-category').text(target.category)
        new_ele.find('.target-item-description').text(target.desc)
        new_ele.attr('href', target.link)
        new_ele.appendTo('#target_list')
        console.log(target.name)
    })
}