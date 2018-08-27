  function objectFitCover (elm) {
    var $parent = $(elm).parent();

    // アスペクト比の計算のため、設定したstyleをリセット
    $parent.css({
      marginTop: '',
      marginLeft: '',
      height: '',
      width: ''
    });

    var videoWidth = elm.videoWidth;
    var videoHeight = elm.videoHeight;
    var videoAspectRatio = videoWidth / videoHeight;
    var parentWidth = $parent.width();
    var parentHeight = $parent.height();
    var parentAspectRatio = parentWidth / parentHeight;

    if (videoAspectRatio > parentAspectRatio) { // ビデオの左右を切り取る場合
      $parent.css({
        marginTop: 0,
        marginLeft: -(parentHeight * videoAspectRatio - parentWidth) / 2,
        height: parentHeight,
        width: parentHeight * videoAspectRatio
      });
    } else { // ビデオの上下を切り取る場合
      $parent.css({
        marginTop: -(parentWidth / videoAspectRatio - parentHeight) / 2,
        marginLeft: 0,
        height: parentWidth / videoAspectRatio,
        width: parentWidth
      });
    }
  }
