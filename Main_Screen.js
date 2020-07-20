var final_path=''


function image()
{
    var file = document.getElementById("file").files[0].path
    var filepath = document.getElementById("file").files[0].path
    console.log(file)
    arr = filepath.split("\\");
    final_path =""
    for(i=0;i<arr.length;i++)
    {
        if(i==(arr.length-1) ) break;
        final_path = final_path + arr[i] + "\\\\";
    }
    final_path = final_path + arr[arr.length-1]
    console.log(final_path);
    var img = document.createElement("img");
    img.src = file;
    var src = document.getElementById("image-container");
    src.appendChild(img);
}

function del()
{
    var select = document.getElementById('image-container');
    select.removeChild(select.lastChild);
    final_path = ''
}

function predict()
{
    const spawn = require('child_process').spawn;
    const scriptExecution = spawn("python.exe", ["./scripts/darknet.py"]);
    
    // Handle normal output
    scriptExecution.stdout.on('data', (data) => {
        console.log(String.fromCharCode.apply(null, data));
    });
    
    // Write data (remember to send only strings or numbers, otherwhise python wont understand)
    var data = final_path;
    console.log(data)
    data = JSON.stringify(data)
    scriptExecution.stdin.write(data);
    // End data write
    scriptExecution.stdin.end();
}