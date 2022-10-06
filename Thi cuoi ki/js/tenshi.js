var cmt = document.getElementsByClassName("btn-comment")[0]
var commentArea = document.getElementsByClassName("comment-area")[0]
var comment = document.getElementsByClassName("comment-info")[0]
var cmtText = document.getElementById("text")
var commentItem = document.getElementsByClassName("cmt")[0]

cmt.onclick = function() {
    cmtText.value = null;
}

function cmtLoop(button) {
   
    if(cmtText.value == null || cmtText.value == "") {
        comment.style.display = "none"
    }
    else {
        commentItem.innerHTML = " " + cmtText.value + " "
        comment.style.display = "flex"
        const node = comment;
        const clone = node.cloneNode(true);
        commentArea.appendChild(clone);
        commentArea.removeChild(comment);
    }
    
}       
