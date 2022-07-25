        function insertVideo() {
			//在demo div中添加video标签
            //获取demo div标签
            let deDiv = document.getElementById('demo');
            //添加video标签
            let mVideo = document.createElement('VIDEO');
            //设置video标签各种属性
            mVideo.setAttribute('width','1000');
			mVideo.setAttribute('height','750');
			mVideo.setAttribute('controls','controls');
			mVideo.setAttribute('playsinline','true');
			mVideo.setAttribute('src','https://halo-lg.github.io/test_for_VideoSniffer/Jeans.mp4');

            // 把js新建的VIDEO放到Div下
            deDiv.appendChild(mVideo);
        }
		
		function insertAnchor() {
			//在testAnchor div中添加a标签
            //获取testAnchor div标签
            let deDiv = document.getElementById('testAnchor');
            //添加a标签
            let a = document.createElement('a');
			//为锚a元素创建文本节点
			var text = document.createTextNode("进入新视频");
			// 将文本节点追加到锚a元素
			a.appendChild(text);
            //设置a标签各种属性
			a.setAttribute('href','https://halo-lg.github.io/test_for_VideoSniffer/Moderns.mp4');

            // 把js新建的VIDEO放到Div下
            deDiv.appendChild(a);
        }
		