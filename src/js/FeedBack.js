let $ = layui.$;

$(
  //1. 搜索框相关
  SearchWatch(),

  //2. 类型切换
  TypeSwitch(),

);


//1. 搜索框相关
function SearchWatch() {
  let input_ele = $('#Js_search');
  input_ele.focus(function () {
    $('.help-search-drop').removeClass('layui-hide')
  });

  input_ele.blur(function () {
    $('.help-search-drop').addClass('layui-hide')
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
  if($('#question').val() === '') {
    layer.msg("内容不能为空！", {anim: 6});
    return;
  }

  $.ajax({
    type: "POST",
    data: {
      "type": $('.on').attr("type"),
      ...transformToJson($("#Js_FeedForm").serializeArray())
    },
    success : function (res) {
      if(res.code) {
        layer.msg(res.data, {icon:1})
      }else {
        layer.msg(res.msg, {icon:2})
      }
    },
    error: function (err) {
      layer.msg("提交出错，请稍后再试！", {icon:2})
    }
  })
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
