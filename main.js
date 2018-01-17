var button = document.getElementsByClassName('submit')[0];
var i = 0

button.addEventListener('click', function() {
  var userName = document.getElementById('name').value;
  var post = document.getElementById('message').value;
  var newDiv = document.createElement('div');
  newDiv.id = i
  newDiv.className = "Rtable message"
  // var post = document.createTextNode("<td>"+userName+"</td><td>"+message+"</td>");
  document.getElementsByClassName('posts')[0].append(newDiv)
  // .innerHTML("<td>"+userName+"</td><td>"+message+"</td>");
  var tableData = "<div class='Rtable-cell Rtable-cell-narrow Rtable-cell-content'>" + userName +
    "</div><div class='Rtable-cell Rtable-cell-wide Rtable-cell-content'>" + post +
    "</div><div class='Rtable-cell Rtable-cell-narrow'><button id=upBtn" + i +
    " class='btn-primary btn-success quality quality-up'>+1</button><button id=dwnBtn" + i +
    " class='btn-primary btn-danger quality quality-down'>-1</button></div><div class='Rtable-cell Rtable-cell-narrow Rtable-cell-empty'><button type='button' id=trash" + i +
    " class='btn btn-default btn-sm pull-left trash'><span class='glyphicon glyphicon-trash'></span></button><button type='button' id=edit" + i +
    " class='btn btn-default btn-sm edit'><span class='glyphicon glyphicon-pencil'></span></button></div>"
  newDiv = document.getElementById(i)
  newDiv.innerHTML = tableData
  newDiv.setAttribute('qual', 0);
  clickTools(i, post)
  i++
});

clickTools = function(rowId, post) {
  var qualityUpButton = document.getElementById('upBtn'+i);
  var qualityDownButton = document.getElementById('dwnBtn'+i);
  var trashButton = document.getElementById('trash'+i);
  var editButton = document.getElementById('edit'+i);
  var row = document.getElementById(rowId)
  var qualityUpButtons = document.getElementsByClassName('quality-up');
  var buttonsCount = qualityUpButtons.length;
  qualityUpButton.addEventListener('click', function() {
    trQual = parseInt(row.getAttribute('qual'))
    row.setAttribute('qual', trQual + 1)
    console.log(parseInt(row.getAttribute('qual')))
    reorderComments()
  });
  qualityDownButton.addEventListener('click', function() {
    trQual = parseInt(row.getAttribute('qual'))
    if (trQual - 1 > -1) {
      row.setAttribute('qual', trQual - 1)
    } else row.setAttribute('qual', 0)
    console.log(parseInt(row.getAttribute('qual')))
    reorderComments()
  });
  trashButton.addEventListener('click', function() {
    row.remove()
  });
  editButton.addEventListener('click', function() {
    result = window.prompt("Update your post", post);
    row.children[1].innerHTML = result
  })


  reorderComments = function() {
    var qualObj = {}
    var items = []
    for (var j = 0; j < buttonsCount; j++) {
      qualObj["id"] = j
      qualObj["quality"] = document.getElementsByClassName("message")[j].getAttribute('qual')
      items[j] = Object.assign({}, qualObj)
    }
    items.sort(function(a, b) {
      return b.quality - a.quality;
    });
    for (var k = 0; k < buttonsCount; k++) {
      document.getElementById(items[k].id).style.order = (k)
      // console.log(items[k].id,document.getElementById(items[k].id).style.order,items[k].quality)
    }
  }


}
