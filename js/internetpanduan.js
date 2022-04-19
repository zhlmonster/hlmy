
$.ajax({
  url: 'https://www.baidu.com',
  dataType:'jsonp',
  success: function(result){
    console.log('网络正常')
  }, 
  error: function(result){
    console.log('网络异常')
  }
});
