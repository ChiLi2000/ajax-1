let n = 2;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        ulX.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      console.log(typeof request.response);
      const jObject = JSON.parse(request.response);
      console.log(jObject.name);
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      //获取 XML 的响应内容
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    }
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/2.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    }
  };
  request.send();
};
getCSS.onclick = () => {
  // 1. 创建 XMLHttpRequest 对象
  const request = new XMLHttpRequest();
  //   2. 调用对象的open方法 初始化一个get请求
  request.open("get", "/style.css"); //readyState=1
  //   3. 监听对象的 onreadystatechange 事件，只要 readyState 属性发生变化，就会调用相应的处理函数
  // request.readyState返回一个XMLHttpRequest 所处的状态
  // readyState=0 代理被创建，但尚未调用 open() 方法。
  // readyState=1 open() 方法已经被调用
  // readyState=2 send() 方法已经被调用，并且头部和状态已经可获得。
  // readyState=3 下载中；
  // readyState=4 下载操作已完成。
  request.onreadystatechange = () => {
    console.log(request.readyState);
    //   下载完成但不知道状态码的情况，判断状态码
    if (request.readyState === 4 && request.status === 200) {
      //   创建 style 标签
      const style = document.createElement("style");
      //  填写 style 内容
      style.innerHTML = request.response;
      // 将 style 插到 head
      document.head.appendChild(style);
    }
  };
  request.send(); //readyState=2
};
