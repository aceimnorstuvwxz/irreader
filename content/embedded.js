
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
        name: "晓说2018",
        category: "播客节目",
        desc: "每周五不见不散，听矮大紧老师谈笑风生",
        icon: "http://fdfs.xmcdn.com/group27/M05/D5/6B/wKgJW1kax1LiB_RyAAOyBznNTh4821.jpg",
        link: "likefeed://add-remote?name=%E6%99%93%E8%AF%B42018&source=http%3A%2F%2Fwww.ximalaya.com%2Falbum%2F8141106.xml&type=1&csser=&min_len=0&desc=%E9%AB%98%E6%99%93%E6%9D%BE%EF%BC%8C%E3%80%8A%E6%99%93%E8%AF%B42018%E3%80%8B%EF%BC%8C%E6%AF%8F%E5%91%A8%E4%BA%94%E4%B8%8D%E8%A7%81%E4%B8%8D%E6%95%A3%EF%BC%8C%E5%90%AC%E7%9F%AE%E5%A4%A7%E7%B4%A7%E8%80%81%E5%B8%88%E8%B0%88%E7%AC%91%E9%A3%8E%E7%94%9F%EF%BC%8C%E8%81%8A%E8%B6%85%E7%BA%A7%E7%A2%97%E3%80%81%E9%A2%81%E5%A5%96%E5%AD%A3%EF%BC%8C%E8%AE%B2%E8%AE%B2%E6%BB%A1%E6%98%AF%E5%8E%86%E5%8F%B2%E5%B9%B2%E8%B4%A7%E7%9A%84%E5%B0%8F%E6%95%85%E4%BA%8B%E3%80%82%E7%93%9C%E5%AD%90%E3%80%81%E5%95%A4%E9%85%92%E3%80%81%E5%B0%8F%E6%9D%BF%E5%87%B3%EF%BC%8C%E5%B7%B2%E7%BB%8F%E4%B8%BA%E5%90%84%E4%BD%8D%E5%AE%A2%E5%AE%98%E5%A4%87%E5%A5%BD%EF%BC%8C%E5%8F%AA%E7%AD%89%E4%BD%A0%E6%9D%A5%E5%90%AC%E3%80%82&icon=http%3A%2F%2Ffdfs.xmcdn.com%2Fgroup27%2FM05%2FD5%2F6B%2FwKgJW1kax1LiB_RyAAOyBznNTh4821.jpg&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
    }, 
    {
        name: "虎嗅网",
        category: "新闻",
        desc: "聚合优质的创新信息与人群，捕获精选|深度|犀利的商业科技资讯。",
        icon: "https://static.huxiucdn.com/common/image/apple-touch-icon-180x180.png",
        link: "likefeed://add-remote?name=%E8%99%8E%E5%97%85%E7%BD%91&source=http%3A%2F%2Fwww.huxiu.com&type=0&csser=h2%20a&min_len=0&desc=%E8%81%9A%E5%90%88%E4%BC%98%E8%B4%A8%E7%9A%84%E5%88%9B%E6%96%B0%E4%BF%A1%E6%81%AF%E4%B8%8E%E4%BA%BA%E7%BE%A4%EF%BC%8C%E6%8D%95%E8%8E%B7%E7%B2%BE%E9%80%89%7C%E6%B7%B1%E5%BA%A6%7C%E7%8A%80%E5%88%A9%E7%9A%84%E5%95%86%E4%B8%9A%E7%A7%91%E6%8A%80%E8%B5%84%E8%AE%AF%E3%80%82%E5%9C%A8%E8%99%8E%E5%97%85%EF%BC%8C%E4%B8%8D%E9%94%99%E8%BF%87%E4%BA%92%E8%81%94%E7%BD%91%E7%9A%84%E6%AF%8F%E4%B8%AA%E9%87%8D%E8%A6%81%E6%97%B6%E5%88%BB%E3%80%82&icon=https%3A%2F%2Fstatic.huxiucdn.com%2Fcommon%2Fimage%2Fapple-touch-icon-180x180.png&charset=utf-8&config=%7B%22query_fields%22%3A%22*%22%2C%22unique_type%22%3A%220%22%7D"
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