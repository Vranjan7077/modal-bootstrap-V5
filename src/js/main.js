$(document).ready(function () {
  $(".cart-qty-plus").hide();
  $(".cart-qty-minus").hide();

  $(document).on("click", ".cart-qty-plus", function () {
    var $n = $(this).parents(".qty-container__qty").find(".qty-input");
    $n.val(Number($n.val()) + 1);
    var parentContainerRow = $(this).parents(".qty-container");
    updateTotal(parentContainerRow);
  });

  $(document).on("click", ".cart-qty-minus", function () {
    var $n = $(this).parents(".qty-container__qty").find(".qty-input");
    var amount = Number($n.val());
    var parentContainerRow = $(this).parents(".qty-container");
    if (amount > 0) {
      $n.val(amount - 1);
    }
    updateTotal(parentContainerRow);
  });

  // one way to implement the hover effect using jquery and other is by using the css only

  $(document).on(
    {
      mouseover: function () {
        $(this).find(".cart-qty-plus").show();
        $(this).find(".cart-qty-minus").show();
      },
      mouseleave: function () {
        $(this).find(".cart-qty-plus").hide();
        $(this).find(".cart-qty-minus").hide();
      },
    },
    ".qty-container__qty"
  );

  $(document).on("click", ".remove-product", function () {
    $(this).slideUp("fast").parents(".cart-row").find(".js-products").remove();
    updateTotal();
  });

  $(".modal-header__close").on("click", function () {
    $("#bonanzaOffer").modal("hide");
  });

  $(document).on("click", ".addMoreItems", function () {
    $(this)
      .parents()
    //  .find(".js-products")
      .find(".moreItems")
     .append(
        '<div class="row g-0 cart-row no-gutters mb-3" id="cartItemsContainer"> <div class="col-md-3 col-sm-12 cart-item cart-column"></div>  <div class="col-md-9 col-sm-12 js-products"><div class="col-2 cart-column cart-colorSelector"><div class="dropdown cart-colorSelector__dropdown"><button class="btn btn-secondary dropdown-toggle"type="button"id="addMoreColors"data-bs-toggle="dropdown"aria-expanded="false">9625 Black</button><ul class="dropdown-menu" aria-labelledby="addMoreColors"><li><a class="dropdown-item" href="#">9626 Blue</a></li><li><a class="dropdown-item" href="#">9627 Yellow</a></li><li><a class="dropdown-item" href="#">9628 Red</a></li></ul></div><span class="cart-colorSelector__addMorePaint addMoreItems"><i class="fa fa-plus-circle add"></i></span></div><div class="col-7 cart-column qty-container"><div class="qty-container__qty bgColor--green" ><legend class="qty-container__qty__amount qtyMultiplier--green">10</legend><span class="qty-container__qty__input colorInput--green"><button class="cart-qty-minus js-minus-button" type="button" value="-">-</button><input type="text" name="qty"type="number"value="0" id="quant10" base-value="10"class="js-input-number qty-input" readonly /><button class="cart-qty-plus js-plus-button" type="button" value="+">+</button></span></div><div class="qty-container__qty bgColor--red"  ><legend class="qty-container__qty__amount qtyMultiplier--red">4L</legend><span class="qty-container__qty__input colorInput--red"><button class="cart-qty-minus js-minus-button" type="button" value="-">-</button><input type="text" name="qty"type="number"value="0"id="quant4" base-value="4"class=" js-input-number qty-input" readonly/><button class="cart-qty-plus js-plus-button" type="button" value="+">+</button></span></div><div class="qty-container__qty bgColor--orange" ><legend class="qty-container__qty__amount qtyMultiplier--orange">1L</legend><span class="qty-container__qty__input colorInput--orange"><button class="cart-qty-minus js-minus-button" type="button" value="-">-</button><input type="text" name="qty"type="number"value="0" id="quant1"base-value="1"class=" js-input-number qty-input" readonly/><button class="cart-qty-plus js-plus-button" type="button" value="+">+</button></span></div><div class="qty-container__qty bgColor--blue"><legend class="qty-container__qty__amount qtyMultiplier--blue">500ML</legend><span class="qty-container__qty__input colorInput--blue"><button class="cart-qty-minus js-minus-button" type="button" value="-">-</button><input type="text" name="qty" type="number"value="0" base-value="0.5"class=" js-input-number qty-input" readonly/><button class="cart-qty-plus js-plus-button" type="button" value="+">+</button></span></div><div class="qty-container__qty bgColor--blue"><legend class="qty-container__qty__amount qtyMultiplier--blue">200ML</legend><span class="qty-container__qty__input colorInput--blue"><button class="cart-qty-minus js-minus-button" type="button" value="-">-</button><input type="text" name="qty" type="number"value="0" base-value="0.2" class=" js-input-number qty-input" readonly/><button class="cart-qty-plus js-plus-button" type="button" value="+">+</button></span></div><div class="qty-container__qty bgColor--black"><legend class="qty-container__qty__amount qtyMultiplier--black">Total</legend><span class="qty-container__qty__input colorInput--black"><input type="text" name="qty" type="number"value="0" class=" js-input-total qty-input" id="product-total"readonly/></span></div><div class="product-removal"><button type="button"class="btn-close remove-product"aria-label="Close"id="removeItem"data-id="1"></button></div></div></div>'
      );
  });
});

function updateTotal(parentContainerRow) {
  if (typeof parentContainerRow !== 'undefined') {
    var children = $(parentContainerRow).find(".js-input-number");
    var childrenSum = 0;
    $(children).each(function () {
      childrenSum += $(this).val() * parseFloat($(this).attr("base-value"));
    });
    var childrenTotal = $(parentContainerRow).find(".js-input-total");
    $(childrenTotal).val(childrenSum);
    sum = 0;
    $(".js-input-total").each(function () {
      sum += parseInt($(this).val());
    });
    $("#finalAmount").text(sum + "L");
}
 
}
