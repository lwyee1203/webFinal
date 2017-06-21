//下拉式選單
$(function(){
    $('.submit').click(function(){
        $('.slider-img').hide();
        $('.frontPage').show();

        var area = document.getElementById('area').value;
        var result=[];
        for(i=0; i<data.length; i++){
            var PublicArt_Place = data[i].PublicArt_Place;
            if(PublicArt_Place.match(area) || area== "all"){
                result.push(data[i]);
                console.log('show');
            }
        }
        
    
    $('.show').html('');
        if(result.length!=0){
            for(var i=0; i<result.length; i++){
                var PublicArt_Name = result[i].PublicArt_Name;
                var PublicArt_Author = result[i].PublicArt_Author;
                var PublicArt_Year = result[i].PublicArt_Year;
                var PublicArt_Size = result[i].PublicArt_Size;
                var PublicArt_Type = result[i].PublicArt_Type;
                var PublicArt_Material = result[i].PublicArt_Material;
                var PublicArt_Place = result[i].PublicArt_Place;
                var PublicArt_Funds = result[i].PublicArt_Funds;
                var PublicArt_Unit = result[i].PublicArt_Unit;
                var PublicArt_Method = result[i].PublicArt_Method;
                var PublicArt_ActTeam = result[i].PublicArt_ActTeam;
                var PublicArt_SelectTeam = result[i].PublicArt_SelectTeam;
                var PublicArt_Desc = result[i].PublicArt_Desc;
                var PublicArt_Image = result[i].PublicArt_Image;
                $('.show').append('<li><img id = "result_img" src ='+PublicArt_Image+'><p id = "line"></p><h2 id = "result_name">'+PublicArt_Name+'</h2><p value="PublicArt_Place" id = "result_place">地址：'+PublicArt_Place+'</p></li>');
            }           
        }else{
            $('.show').html('<img class="unfind" src = "images/unfind.png">');
        }
    })
})

//顯示詳細資料

window.onload = function showData() {

list = ''
    for(i=0; i<data.length; i++){
    list+='<ul><li><img class="Image" src='+ data[i].PublicArt_Image+'><h2 class="Name">名稱：'+data[i].PublicArt_Name+'</h2><p class="Author">創作者：'+data[i].PublicArt_Author+'</p><p class="Year">創作年分：'+data[i].PublicArt_Year+'</p><p class="Size">作品大小：'+data[i].PublicArt_Size+'</p><p class="Type">材質：'+data[i].PublicArt_Type+'</p><p class="Material">原料：'+data[i].PublicArt_Material+'</p><p class="Place">地址：'+data[i].PublicArt_Place+'<a href="https://www.google.com.tw/maps/place/'+data[i].PublicArt_Place+'"><img id="map" src="images/google-maps.png"></a></p><p class="Funds">挹注資金：NT$'+data[i].PublicArt_Funds+'</p><p class="Unit">所屬單位：'+data[i].PublicArt_Unit+'</p><p class="Method">遴選方式：'+data[i].PublicArt_Method+'</p><p class="ActTeam">執行團隊：'+data[i].PublicArt_ActTeam+'</p><p class="SelectTeam">選擇團隊：'+data[i].PublicArt_SelectTeam+'</p><p class="Desc">作品描述：'+data[i].PublicArt_Desc+'</p></li></ul>'
    document.getElementById('show1').innerHTML = list;
    }
}

//圖片輪播 start
 $(function(){
        // 先取得必要的元素並用 jQuery 包裝
        // 再來取得 $block 的寬度及設定動畫時間
        var $block = $('.slider-img'), 
            $slides = $block.find('.slides'), 
            $ul = $slides.find('ul'), 
            _width = $slides.width(), 
            _left = _width * -1, 
            _animateSpeed = 600, 
            // 加入計時器, 輪播時間及控制開關
            timer, _showSpeed = 1500, _stop = false;
        
        // 先把最後一個 li 的內容插入到第一個 li 前面
        // 並設定 $ul 的 left 及 width
        $ul.find('li:first').before($ul.find('li:last')).end().css({
            left: _left,
            width: _width * ($ul.find('li') + 1)
        });

        // 當點擊到 a.prev 時
        var $prev = $block.find('a.prev').click(function(){
            // 移動 $ul
            $ul.stop(false, true).animate({'left' : _left + _width}, _animateSpeed, function () {
                // 把最後一個 li 的內容插入到第一個 li 前面
                $ul.find('li:first').before($ul.find('li:last')).end().css('left', _left);
                // 當移動到正確位置後, 依判斷來啟動計時器
                if(!_stop) {
                    clearTimeout(timer);
                    timer = setTimeout(move, _showSpeed);
                }
            });
            return false;
        });
        
        // 當點擊到 a.next 時
        var $next = $block.find('a.next').click(function(){
            // 移動 $ul
            $ul.stop(false, true).animate({'left' : _left - _width}, _animateSpeed, function () {
                // 把第一個 li 的內容插入到最後一個 li 後面
                $ul.find('li:last').after($ul.find('li:first')).end().css('left', _left);
                // 當移動到正確位置後, 依判斷來啟動計時器
                if(!_stop) {
                    clearTimeout(timer);
                    timer = setTimeout(move, _showSpeed);
                }
            });
            return false;
        });
        
        // 如果滑鼠移入 $block 時
        $block.hover(function(){
            // 關閉開關及計時器
            _stop = true;
            clearTimeout(timer);
        }, function(){
            // 如果滑鼠移出 $block 時
            // 開啟開關及計時器
            _stop = false;
            timer = setTimeout(move, _showSpeed);
        }).find('a').focus(function(){
            this.blur();
        });
        
        // 計時器使用
        function move(){
            $next.click();
        };

        timer = setTimeout(move, _showSpeed);
    });

 //圖片輪播 end
