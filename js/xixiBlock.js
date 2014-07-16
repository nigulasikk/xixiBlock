/**
 * Created by qkk on 14-7-16.
 */



function xixiBlock(id, allData) {
    //canvas画方块
    var blocks = document.getElementById(id);
    var ctx = blocks.getContext('2d');

//数据长度
//TODO:
    var dataLength = allData.length;
    if (dataLength < 1600) {
        //正方形边长
        var blockLength = 15;
        //一块长方形 起始位置
        var blockTotalLength = 17;
        //每行放几个正方形
        var eachRow = 40;
    } else {
        //正方形边长
        var blockLength = 9;
        //一块长方形 起始位置
        var blockTotalLength = 10;
        //每行放几个正方形
        var eachRow = 68;
    }


//canvas画布长度
    s("建议canvas画布宽度设置成为：" + eachRow * blockTotalLength);
//画图
    for (var i = 0; i < dataLength; i++) {
        //第几行
        var line = (i - i % eachRow) / eachRow;
        //第几列
        var col = i % eachRow;
        //TODO:
        if (allData[i].color == 1) {
            ctx.fillStyle = 'yellow';
            ctx.fillRect(blockTotalLength * col, line * blockTotalLength, blockLength, blockLength);
        } else {
            ctx.fillStyle = 'green';
            ctx.fillRect(blockTotalLength * col, line * blockTotalLength, blockLength, blockLength);
        }
    }
//画布点击
    $("#block-canvas").click(function (e) {
            var position = getPosition(e);
            if (position) {
                var col = position.col;
                var row = position.row;
                $("#clickPosition").text("position:" + "col:" + col + "----row:" + row);
                var index = ((row - 1) * eachRow + col - 1);
                $("#clickInfo").text("name:" + allData[index].name);
                s("col:" + col + "----row:" + row);
            } else {
                $("#clickPosition").text("position:" + "u click out!");
                $("#clickInfo").text("");

                s("点在外面");
            }


        }
    );
//获取鼠标点击位置
    function getPosition(e) {
        var x, y;
        if (e.layerX) {
            //ff
            x = e.layerX;
            y = e.layerY;
        } else {
            //Chrome
            x = e.offsetX;
            y = e.offsetY;
        }

        var col = (x - x % blockTotalLength) / blockTotalLength + 1;
        var row = (y - y % blockTotalLength) / blockTotalLength + 1;

        return ((row - 1) * eachRow + col - 1) < dataLength ? {col: col, row: row} : null;
    }

    $("#data600").click(function(){
        ctx.clearRect(0,0,680,900);

        xixiBlock("block-canvas",data600);

    });
    $("#data6000").click(function(){
       ctx.clearRect(0,0,680,900);

        xixiBlock("block-canvas",data6000);

    });
}

//控制台输出
function s(about){
    console.log(about);
}