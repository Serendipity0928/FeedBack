let $ = layui.$;

$(
  //1. 搜索框相关
  SearchWatch(),

  //2. 类型切换
  TypeSwitch(),

);


//1. 搜索框相关
function SearchWatch() {
  $('#Js_search').focus(function () {
    $('.help-search-drop').removeClass('layui-hide')
  })
}

//2. 类型切换
function TypeSwitch() {
  $('.class_type').click(function () {
    $('#Js_type').children().removeClass('on');
    $(this).addClass('on')
  })
}

//3. 表单相关
function SendInformation() {
  console.log($('.on').attr("type"));
  console.log(transformToJson($("#Js_FeedForm").serializeArray()));
  // $.Post({
  //   url: "dsa"
  //   ,data: $("#Js_FeedForm").serialize()
  //
  // })
}
function transformToJson(formData){
  let obj={};
  for (let i in formData) {
    //下标为的i的name做为json对象的key，下标为的i的value做为json对象的value
    if(formData.hasOwnProperty(i) ) {
      obj[formData[i].name]=formData[i]['value'];
    }
  }
  return obj;
}

