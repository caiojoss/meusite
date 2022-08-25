$('.cabecalho a[ref^="#"]').on("click"),
  function (e) {
    e.preventDefault();
    var id = $(this).atrr("href"),
      targetOffset = $(id).offset().top;

    $(html, body).animate(
      {
        scrollTop: targetOffset - 300,
      },
      700
    );
  };
