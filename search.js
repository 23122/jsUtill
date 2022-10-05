function findkey() {
    /*카테고리*/
    var cata = $("#cata").val();
    /*키워드*/
    var key = $("#info-key").val();
    /*for문 횟수*/
    var titleWrap = document.getElementsByClassName("title-wrap");
    var contWrap = document.getElementsByClassName("cont-wrap");

    for (var i = 0; i < titleWrap.length; i++) {
        /*검색대상 초기화*/
        var findKeyWord=null;
        var findKeyWord2=null;
        /*카테고리 별 검색*/
        switch (cata){
            case '0':
                /*전체조회*/
                findKeyWord = titleWrap[i].getElementsByClassName("title");
                findKeyWord2 = contWrap[i].getElementsByClassName("content");
                break;
            case '1':
                /*공지사항 제목*/
                findKeyWord = titleWrap[i].getElementsByClassName("title");
                break;
            case '2' :
                /*공지사항 내용*/
                findKeyWord = contWrap[i].getElementsByClassName("content");
                break;
        }
        /*nth:child index*/
        var index = i+1;
        var viewPoint = $("table .view-point:nth-child("+index+")>td");
        /*검색결과 처리*/
        if (findKeyWord2==null) {
            /*개별조회*/
            if (findKeyWord[0].innerHTML.includes(key)) {
                /*검색결과가 있는경우*/
                viewPoint.show();
            } else {
                /*결과가 없는경우*/
                viewPoint.hide();
            }
        } else {
            /*전체조회*/
            if (findKeyWord[0].innerHTML.includes(key) || findKeyWord2[0].innerHTML.includes(key)) {
                /*검색결과가 있는경우*/
                viewPoint.show();
            } else {
                /*결과가 없는경우*/
                viewPoint.hide();
            }
        }
    }
}
