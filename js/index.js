var two = document.getElementById('two')
 var one = document.getElementById('one')
 var three = document.getElementById('three')
 var four = document.getElementById('four')
 var five = document .getElementById('five')
var six=document.getElementById('six')
var seven=document.getElementById('seven')
var seven_none=document.getElementById('seven_none')
 var loader_bar = document.querySelector('.loader_bar')
 var myVid = document.getElementById("video1");
var v1 = document.getElementById("v1");
var v1_1 = document.getElementById("v1_1");
var v2 = document.getElementById("v2");

 var i = 0
var ei = document.getElementById('ei')
var back_2 =document.getElementById('back_2')
var button_1 =document.getElementById('button_1')



window.onload=function() {



    /*------------------------------------------*/

    var a1 = document.getElementById('11')
    a1.oneFunction = function () {
        document.getElementById("1").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("1").classList.add("tiger_3");
        document.getElementById("2").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("2").classList.add("tiger_4");
        document.getElementById("3").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("3").classList.add("tiger_5");
        document.getElementById("4").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("4").classList.add("tiger_1");
        document.getElementById("5").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("5").classList.add("tiger_2");
        document.getElementById('7').innerHTML = '<img src="img/BBU.png"width="1.5rem" id="121">'
        document.getElementById('oneFont').innerHTML = '青铜虎钮錞于'
        document.getElementById('twoFont').innerHTML = '钮錞于'
        document.getElementById('threeFont').innerHTML = '1<br>9<br>3<br>7年'
        document.getElementById('fourFont').innerHTML = '战国三级文物'

    }
    var a2 = document.getElementById('12')
    a2.twoFunction = function () {
        document.getElementById("1").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("1").classList.add("tiger_2");
        document.getElementById("2").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("2").classList.add("tiger_3");
        document.getElementById("3").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("3").classList.add("tiger_4");
        document.getElementById("4").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("4").classList.add("tiger_5");
        document.getElementById("5").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("5").classList.add("tiger_1");
        document.getElementById('7').innerHTML = '<img src="img/bbi.png" id="121" >'
        document.getElementById('oneFont').innerHTML = '虎纹铜戈'
        document.getElementById('twoFont').innerHTML = '铜戈'
        document.getElementById('threeFont').innerHTML = '1<br>9<br>3<br>7年'
        document.getElementById('fourFont').innerHTML = '战国一级文物'


    }
    var a3 = document.getElementById('13')
    a3.threeFunction = function () {
        document.getElementById("1").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("1").classList.add("tiger_1");
        document.getElementById("2").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("2").classList.add("tiger_2");
        document.getElementById("3").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("3").classList.add("tiger_3");
        document.getElementById("4").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("4").classList.add("tiger_4");
        document.getElementById("5").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("5").classList.add("tiger_5");
        document.getElementById('7').innerHTML = '<img src="img/BBT.png" width="1.5rem" id="121">'
        document.getElementById('oneFont').innerHTML = '画虎图轴'
        document.getElementById('twoFont').innerHTML = '虎图'
        document.getElementById('threeFont').innerHTML = '1<br>9<br>3<br>7年'
        document.getElementById('fourFont').innerHTML = '民国张善孖'


    }
    var a4 = document.getElementById('14')
    a4.fourFunction = function () {
        document.getElementById("1").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("1").classList.add("tiger_5");
        document.getElementById("2").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("2").classList.add("tiger_1");
        document.getElementById("3").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("3").classList.add("tiger_2");
        document.getElementById("4").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("4").classList.add("tiger_3");
        document.getElementById("5").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("5").classList.add("tiger_4");
        document.getElementById('7').innerHTML = '<img src="img/BBR.png" width="1.5rem" id="121">'
        document.getElementById('oneFont').innerHTML = '战国陶虎'
        document.getElementById('twoFont').innerHTML = '陶虎'
        document.getElementById('threeFont').innerHTML = '1<br>9<br>3<br>7年'
        document.getElementById('fourFont').innerHTML = '成都青羊宫出土'


    }
    var a5 = document.getElementById('15')
    a5.fiveFunction = function () {
        document.getElementById("1").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("1").classList.add("tiger_4");
        document.getElementById("2").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("2").classList.add("tiger_5");
        document.getElementById("3").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("3").classList.add("tiger_1");
        document.getElementById("4").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("4").classList.add("tiger_2");
        document.getElementById("5").classList.remove("tiger_1", "tiger_2", "tiger_3", "tiger_4", "tiger_5");
        document.getElementById("5").classList.add("tiger_3");
        document.getElementById('7').innerHTML = '<img src="img/bbp.png" width="1.5rem" id="121">'
        document.getElementById('oneFont').innerHTML = '虎形镇纸'
        document.getElementById('twoFont').innerHTML = '镇纸'
        document.getElementById('threeFont').innerHTML = '1<br>9<br>3<br>7年'
        document.getElementById('fourFont').innerHTML = '宋代三级文物'
    }

    var a6 = document.getElementById('7')
    a6.sixFunction = function () {
        document.getElementById('m_3').src = document.getElementById('121').src
        document.getElementById('m_2').src = document.getElementById('121').src
        document.getElementById('m_1').src = document.getElementById('121').src
        six.style.display = 'none'
        seven.style.display = 'block'
        seven_none.style.display = 'block'

    }
    var b3 = document.getElementById('b3')
    b3.button_3 = function () {

        /*ff1()
        c122()*/
        ei.style.display = 'block'
        seven_none.style.display = 'none'
        seven.style.display = 'none'
        $('#bb_1').append($('#up_1').html());
    }

    /*    function c122() {

                to_img_1()
        }
        function to_img_1() {
            window.pageYoffset = 0;
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            html2canvas(document.getElementById("up_1"),{width:200,height:200,scale:2,useCORS:true}).then(function(canvas){
                $('#nine').append(canvas);
            })
        }*/

/*
    function ff1() {


        document.getElementById('q1').style.display = 'block'
        document.getElementById('q2').style.display = 'block'
        document.getElementById('q3').style.display = 'block'
        document.getElementById('q4').style.display = 'block'
        document.getElementById('q5').style.display = 'block'
        document.getElementById('q6').style.display = 'block'
        document.getElementById('q7').style.display = 'block'
        document.getElementById('q8').style.display = 'block'
        document.getElementById('q9').style.display = 'block'
        document.getElementById('q10').style.display = 'block'
        document.getElementById('q11').style.display = 'block'
        document.getElementById('q12').style.display = 'block'
        document.getElementById('q13').style.display = 'block'
        document.getElementById('q14').style.display = 'block'
        document.getElementById('q15').style.display = 'block'
        document.getElementById('q16').style.display = 'block'
        document.getElementById('q17').style.display = 'block'
        document.getElementById('q18').style.display = 'block'*/

        /*  for (let i = 0; i < itemss_1.length; i++) {
              for (let j = 0; j < itemss.length; j++) {
                          var itemsss = itemss[i].getElementsByTagName("img");
                          if (i === j && itemss_1[i].style.background !== 'red') {
                              var itemsss_1 = itemss_1[i].getElementsByTagName("img");
                              itemsss[0].style.opacity = '1'
                              jj = i
                              b = jj
                              return;
                          }
                      }
                      if (itemss_1[i].style.background === 'red') {
                          itemsss[0].style.display = '1'

                          return;
                      }
          }
          function getBase64Image(img) {
              var canvas = document.createElement("canvas");
              canvas.width = img.width;
              canvas.height = img.height;
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0, img.width, img.height);
              var dataURL = canvas.toDataURL("image/png");
              return dataURL
              // return dataURL.replace("data:image/png;base64,", "");

          }
          function main() {
              var img = document.createElement('img');
              img.src = 'img/antique1_1.png';  //此处自己替换本地图片的地址
              img.onload =function() {
                  var data = getBase64Image(img);
                  var img1 = document.createElement('img');
                  img1.src = data;
                  document.body.appendChild(img1);
                  console.log(data);
              }
          }
          main()
      }*/
        /*   function getBase64Image(imgurl) {
               var img = new Image();
               img.src = imgurl;
               img.setAttribute('crossOrigin', 'anonymous');
               img.οnlοad=function(){
                   var canvas = document.createElement("canvas");
                   canvas.width = 300;//这个设置不能丢，否者会成为canvas默认的300*150的大小
                   canvas.height = 300;//这个设置不能丢，否者会成为canvas默认的300*150的大小
                   var ctx = canvas.getContext("2d");
                   ctx.drawImage(img, 0, 0, 300, 300);
                   var dataURL = canvas.toDataURL("image/png");
                   console.log(dataURL)
                   $("#img").attr("src",dataURL);

               }/!**!/*/
        var one1 = document.getElementById('one1')
        one1.one1Function = function () {
            a2.twoFunction();
            five.style.display = 'none'
            six.style.display = 'block'
        }
        var two1 = document.getElementById('two1')
        two1.two1Function = function () {
            a4.fourFunction();
            five.style.display = 'none'
            six.style.display = 'block'
        }
        var three1 = document.getElementById('three1')
        three1.three1Function = function () {
            a5.fiveFunction()
            five.style.display = 'none'
            six.style.display = 'block'
        }
        var four1 = document.getElementById('four1')
        four1.four1Function = function () {
            a1.oneFunction();
            five.style.display = 'none'
            six.style.display = 'block'
        }
        var five1 = document.getElementById('five1')
        five1.five1Function = function () {
            a3.threeFunction()
            five.style.display = 'none'
            six.style.display = 'block'
        }
        var tf1 = document.getElementById('tf1')
        tf1.left_1 = function () {
            five.style.display = 'none'
            four.style.display = 'block'
        }
        var left_2 = document.getElementById('left_2')
        left_2.left_2 = function () {
            six.style.display = 'none'
            five.style.display = 'block'
        }

        var left_3 = document.getElementById('left_3')
        left_3.left_3 = function () {
            seven_none.style.display = 'none'
            seven.style.display = 'none'
            six.style.display = 'block'
        }


        const range_1 = document.getElementById('cl_1');
        var cl_1 = document.getElementById('cl_1')
        cl_1.change1 = function () {
            const filter = parseInt(range_1.value);

            var x = filter * 2 - 100
            const img = document.getElementById('m_1')
            img.style.filter = 'contrast(' + filter + '%)'

        }

        const range_2 = document.getElementById('cl_2');
        var cl_2 = document.getElementById('cl_2')

        cl_2.change2 = function () {
            const filter = parseInt(range_2.value);

            const x = filter * 3

            const img = document.getElementById('m_2')
            img.style.filter = 'hue-rotate(' + x + 'deg) '

        }

        const range_3 = document.getElementById('cl_3');


        var cl_3 = document.getElementById('cl_3')
        cl_3.change3 = function () {
            const filter = parseInt(range_3.value);

            const x = filter * 3

            const img = document.getElementById('m_3')
            img.style.filter = 'saturate(' + filter + '%) '

        }

        const range_4 = document.getElementById('cl_4');

        var cl_4 = document.getElementById('cl_4')
        cl_4.change4 = function () {
            const filter = parseInt(range_4.value);
            const x = filter / 9
            const img = document.getElementById('ul_1')
            img.style.left = '-' + x + 'rem.js'

        }
}
    var content = document.getElementById("img_3");
    var items = content.getElementsByTagName("ul");
    var itemss = items[0].getElementsByTagName("li");


    var content_2 = document.getElementById("q1");
    var content_1 = document.getElementById("img_2");
    var items_1 = content_1.getElementsByTagName("ul");
    var itemss_1 = items_1[0].getElementsByTagName("li");
    var jj = 0
    var b = jj
    var z = itemss[b]


    var a = 0
    var t = 0
    const init = () => {
        f()
        moveClick(itemss[0], null, true, true)
        moveClick(itemss[1], null, true, true)
        moveClick(itemss[2], null, true, true)
        moveClick(itemss[3], null, true, true)
        moveClick(itemss[4], null, true, true)
        moveClick(itemss[5], null, true, true)
        moveClick(itemss[6], null, true, true)
        moveClick(itemss[7], null, true, true)
        moveClick(itemss[8], null, true, true)
        moveClick(itemss[9], null, true, true)
        moveClick(itemss[10], null, true, true)
        moveClick(itemss[11], null, true, true)
        moveClick(itemss[12], null, true, true)
        moveClick(itemss[13], null, true, true)
        moveClick(itemss[14], null, true, true)
        moveClick(itemss[15], null, true, true)
        moveClick(itemss[16], null, true, true)
        moveClick(itemss[17], null, true, true)
    }

    function f() {
        for (let i = 0; i < itemss_1.length; i++) {
            itemss_1[i].addEventListener('click', function () {

                    for (let j = 0; j < itemss.length; j++) {
                        var itemsss = itemss[i].getElementsByTagName("img");
                        if (i === j && itemss_1[i].style.background !== 'red') {
                            var itemsss_1 = itemss_1[i].getElementsByTagName("img");

                            itemsss[0].style.display = 'block'
                            itemss_1[i].style.background = 'red'
                            jj = i
                            b = jj

                            return;
                        }
                    }
                    if (itemss_1[i].style.background === 'red') {
                        itemss_1[i].style.background = 'white'
                        itemsss[0].style.display = 'none'
                        return;
                    }
                }
            )
        }
    }


    /**
     * 拖拽移动效果
     * @author lpp
     * @param ele  移动的元素（id 获取）
     * @param callback  点击元素的回调函数
     * @param upAndDown 开启上下移动  true,false
     * @param leftAndRight 开启左右移动 true,false
     */


    function moveClick(ele, callback, upAndDown, leftAndRight) {

        var oMeta = document.createElement('meta');
        oMeta.content = 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no';
        oMeta.name = 'viewport';
        document.getElementsByTagName('head')[0].appendChild(oMeta);
        // 记录开始时间
        var startTime = 0,
            // 控制允许延迟的时间
            delayTime = 200,
            // 记录是否移动，如果移动，则不触发tap事件
            isMove = false,
            disX = 0,
            disY = 0,
            resetLeft = 0,
            resetTop = 0;
        var windowWidth = window.screen.width;
        var windowHeight = window.screen.height;
        var rightMostDistance = windowWidth - ele.offsetWidth; // 可移动到最右侧距离


        var leftMostDistance = 0;    // 可移动到最左侧距离
        var TopMostDistance = 0;    // 可移动到最上面距离
        var bottomMostDistance = windowHeight - ele.offsetHeight;    // 可移动到最下面距离

        // 在touchstart时记录开始的时间
        ele.addEventListener('touchstart', function (e) {
            startTime = Date.now();
            e = e || event;
            e.preventDefault();
            disX = e.targetTouches[0].clientX - ele.offsetLeft;      // 鼠标摁下时，鼠标离左边框的距离=鼠标的坐标- div 左边框的左边距
            disY = e.targetTouches[0].clientY - ele.offsetTop;
        });

        // 如果touchmove事件被触发，则isMove为true
        ele.addEventListener('touchmove', function (e) {
            e.preventDefault();
            isMove = true;
            var oEvent = e || event;
            resetLeft = oEvent.targetTouches[0].clientX - disX;      // 鼠标移动时，div 左边框的左边距=鼠标的坐标- 鼠标离左边框的距离
            resetTop = oEvent.targetTouches[0].clientY - disY;         // 鼠标移动时，div 上边框的上边距=鼠标的坐标- 鼠标离上边框的距离
            if (resetLeft >= leftMostDistance && resetLeft <= rightMostDistance && leftAndRight) {
                ele.style.left = resetLeft + 'px';
            }
            if (resetTop >= TopMostDistance && resetTop <= bottomMostDistance && upAndDown) {
                ele.style.top = resetTop + 'px';
            }
        });

        // 如果touchmove事件触发或者中间时间超过了延迟时间，则返回，否则，调用回调函数。
        /* ele.addEventListener('touchend', function (e) {
             if (isMove && (Date.now() - startTime > delayTime)) {
                 isMove = false;
             } else {
                 callback(e);
             }
         })*/
    }

    init()




/*$.fn.longPress = function(fn) {
    let timeout = 0;
    const $this = this;
    for (let i = 0; i < $this.length; i++) {
        $this[i].addEventListener('touchstart', () => {
            timeout = setTimeout(fn, 800); // 长按时间超过800ms，则执行传入的方法
        }, false);
        $this[i].addEventListener('touchend', () => {
            clearTimeout(timeout); // 长按时间少于800ms，不会执行传入的方法
        }, false);
    }
};
$('img').longPress(() => {
    saveImg();
});*/

/*
 html2canvas(dom, param2) {

}

function saveImg() {
    // 想要保存的图片节点
    const dom = document.getElementById('up_1');

    // 创建一个新的canvas
    const Canvas = document.createElement('canvas');
    const width = document.body.offsetWidth;  // 可见屏幕的宽
    const height = document.body.offsetHeight;  // 可见屏幕的高
    const scale = window.devicePixelRatio;  // 设备的devicePixelRatio

    // 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
    Canvas.width = width * scale;
    Canvas.height = height * scale;
    Canvas.getContext('2d').scale(scale, scale);
    html2canvas(dom, {
        canvas: Canvas,
        scale,
        useCORS: true,
        logging: true,
        width: width + 'px',
        height: height + 'px',
    }).then((canvas) => {
        const context = canvas.getContext('2d');
        // 关闭抗锯齿形
        context.mozImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        // canvas转化为图片
        const img = canvas2Image(canvas, canvas.width, canvas.height);
        console.log(img)
        console.log('1')
        /!*document.body.appendChild(img);
        img.style.cssText = "width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;";*!/
    })

}
function canvas2Image(canvas, width, height) {
    const retCanvas = document.createElement('canvas');
    const retCtx = retCanvas.getContext('2d');
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
    const img = document.createElement('img');
    img.src = retCanvas.toDataURL('image/jpeg');  // 可以根据需要更改格式
    return img;
}
function button_3() {
    saveImg()
    console.log('33.')
}
*/




