var button = document.getElementsByClassName('submit')[0];
var i = 0

button.addEventListener('click', function() {
  var userName = document.getElementById('name').value;
  var post = document.getElementById('message').value;
  var newTr = document.createElement('tr');
  newTr.id = i
  newTr.className = "messageRow"
  // var post = document.createTextNode("<td>"+userName+"</td><td>"+message+"</td>");
  document.getElementsByTagName('table')[0].append(newTr)
  // .innerHTML("<td>"+userName+"</td><td>"+message+"</td>");
  var tableData = "<td>" + userName + "</td><td>" + post + "</td><td><button id=upBtn" + i + " class='btn-primary btn-success quality quality-up'>+1</button><button id=dwnBtn" + i + " class='btn-primary btn-danger quality quality-down'>-1</button></td>"
  newTr = document.getElementById(i)
  newTr.innerHTML = tableData
  newTr.setAttribute('qual', 0);
  // var newBtn = document.createElement('button');
  // document.getElementById(i).append(newBtn)
  clickTools(i)
  i++
});

clickTools = function(i) {
    var qualityUpButtons = document.getElementsByClassName('quality-up');
    var qualityDownButtons = document.getElementsByClassName('quality-down');
    var btnId
    var buttonsCount = qualityUpButtons.length;
    qualityUpButtons[i].addEventListener('click', function() {
      btnId = this.id;
      trId = document.getElementById(btnId.slice(-1))
      trQual = parseInt(trId.getAttribute('qual'))
      trId.setAttribute('qual', trQual + 1)
      reorderComments()
    });
    qualityDownButtons[i].addEventListener('click', function() {
        btnId = this.id;
        trId = document.getElementById(btnId.slice(-1))
        trQual = parseInt(trId.getAttribute('qual'))
        if (trQual - 1 > -1) {
            trId.setAttribute('qual', trQual - 1)
          } else trId.setAttribute('qual', 0)

          reorderComments()
        });

      reorderComments = function() {
        var qualObj = []
        for (var j = 0; j < buttonsCount; j++) {
          qualObj[j] = [j, document.getElementsByClassName("messageRow")[j].getAttribute('qual')]
        }
        console.log(qualObj)
      }
    }
    // function reorderComments() {
    //
    //     document.getElementById("myRedDIV").style.order = "4";
    //     document.getElementById("myBlueDIV").style.order = "3";
    //     document.getElementById("myGreenDIV").style.order = "1";
    //     document.getElementById("myPinkDIV").style.order = "2";
    // }
