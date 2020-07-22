$(document).ready(function () {
    let cartList = [];
    $("#cartCountDiv").hide();
    $("#contactPage").hide();
    $("#buyNow").hide();
    //Use a Click event - 2 points
    $("#chocolateCombo, #chocolateBouquet, #exoticChocolates, #sugarFreeChocolates, #kidsGifts, #girlsGifts, #boysGifts, #loversGifts, #parentsGifts,#butterScotch, #chocolate, #pineapple, #strawberry, #lillies, #mixedFlowers, #orchids, #roses  ").click(function (e) {
        //Create an XMLHttpRequest object - 15 points
        debugger;
        let xmlhttp = new XMLHttpRequest();
        let url = getChocolateDataURL($(e.currentTarget).attr("id"));

        //Use the XMLHttpRequest object to get XML/JSON data - 15 points
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                $("#buyNow").hide();
                $("#contactPage").hide();
                $("#cartCountDiv").hide();
                $("#loginPage").children().remove();
                let coverImageURL = getCoverImageURL($(e.currentTarget).attr("id"));
                let chocolateComboData = JSON.parse(this.responseText);
                let chocolateList = new ChocolateListView(chocolateComboData, cartList, coverImageURL); //  Create an Object using a Constructor -----       5 Points           
                chocolateList.render(); // Use an OBject --- 2 points
                $("#coverImage").css({
                    "background-image": 'url( ' + coverImageURL + ')'
                });
                $("#coverImage").css({
                    "height": "300px"
                });
            }

        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();


    });

    $("#showCart").click(function (e) {
        $("#wrapper").hide();
        $("#loginPage").children().remove();
        $("#contactPage").hide();
        $("#coverImage").hide();
        $("#chocolateContainer").children('div').remove();
        $("#cartContainer").children('div').show();
        $("#cartCountDiv").show();
        $("#buyNow").show();
        let showCartListView = new CartListView(this.cartList);
        showCartListView.render(); //Access an objects method using dot notation --- 2 points

    });

    $("#contactUs").click(function () {
        $("#wrapper").hide();
        $("#cartCountDiv").hide();
        $("#loginPage").children().remove();
        $("#chocolateContainer").children('div').remove();
        $("#cartContainer").children('div').hide();
        $("#buyNow").hide();
        $("#coverImage").hide();
        $("#contactPage").show();
    });

    $("#acc").click(function () {
        $("#wrapper").hide();
        $("#cartCountDiv").hide();
        $("#chocolateContainer").children('div').remove();
        $("#cartContainer").children('div').hide();
        $("#buyNow").hide();
        $("#coverImage").hide();
        $("#contactPage").hide();

        //$("#loginPage").show();
        let login = new LoginView();
        login.render();
    });

    /*
    A custom function - 2 points
    A custom function using parameters - 5 points
    */

    function getChocolateDataURL(id) {
        let textFileName = "";
        const path = "js/data/";
        const chocolate = "chocolate/";
        const gifts = "gifts/";
        const flowers = "flowers/";
        const cakes = "cakes/";
        //Use a switch statement with at least 3 cases and 1 default - 10 points
        switch (id) {
            case "chocolateCombo":
                textFileName = chocolate + "chocolateComboData.txt";
                break;
            case "chocolateBouquet":
                textFileName = chocolate + "chocolateBouquetData.txt";
                break;
            case "exoticChocolates":
                textFileName = chocolate + "chocolateExoticData.txt";
                break;
            case "sugarFreeChocolates":
                textFileName = chocolate + "chocolateSugarFree.txt";
                break;
            case "kidsGifts":
                textFileName = gifts + "kidsGiftsData.txt";
                break;
            case "girlsGifts":
                textFileName = gifts + "girlsGiftsData.txt";
                break;
            case "boysGifts":
                textFileName = gifts + "boysGiftsData.txt";
                break;
            case "parentsGifts":
                textFileName = gifts + "parentsGiftsData.txt";
                break;

            case "butterScotch":
                textFileName = cakes + "butterScotchData.txt";
                break;
            case "chocolate":
                textFileName = cakes + "chocolateData.txt";
                break;
            case "pineapple":
                textFileName = cakes + "pineappleData.txt";
                break;
            case "strawberry":
                textFileName = cakes + "strawberryData.txt";
                break;
            case "lillies":
                textFileName = flowers + "lilliesData.txt";
                break;
            case "mixedFlowers":
                textFileName = flowers + "MixedFlowersData.txt";
                break;
            case "orchids":
                textFileName = flowers + "OrchidsData.txt";
                break;
            case "roses":
                textFileName = flowers + "Roses.txt";
                break;
            default:
                break;
        }

        return path + textFileName;
    }

    function getCoverImageURL(id) {
        let textFileName = "";
        const path = "./images/";
        const chocolate = "choclates/";
        const gifts = "Gifts/";
        const flowers = "flowers/";
        const cakes = "Cakes/";
        //Use a switch statement with at least 3 cases and 1 default - 10 points
        switch (id) {
            case "chocolateCombo":
                textFileName = chocolate + "chocolatesCombo/coverImage/chocolatesCombo-cover.jpg";
                break;
            case "chocolateBouquet":
                textFileName = chocolate + "chocolatesBoquet/coverImage/chocolatesBoquet-cover.png";
                break;
            case "exoticChocolates":
                textFileName = chocolate + "chocolatesExotic/coverImage/chocolatesExotic-cover.jpg";
                break;
            case "sugarFreeChocolates":
                textFileName = chocolate + "chocolatesSugarFree/coverImage/chocolatesSugarFree-cover.jpg";
                break;
            case "kidsGifts":
                textFileName = gifts + "boysGifts/coverImage/boysGifts-cover.png";
                break;
            case "girlsGifts":
                textFileName = gifts + "girlsGifts/coverImage/girlsGifts-cover.png";
                break;
            case "boysGifts":
                textFileName = gifts + "kidsGifts/coverImage/kidsGifts-cover.png";
                break;
            case "parentsGifts":
                textFileName = gifts + "parentsGifts/coverImage/parentsGifts-cover.png";
                break;
            case "butterScotch":
                textFileName = cakes + "ButterScotch/coverImage/ButterScotch-cover.jpg";
                break;
            case "chocolate":
                textFileName = cakes + "Chocolate/coverImage/Chocolate-cover.jpg";
                break;
            case "pineapple":
                textFileName = cakes + "Pineapple/coverImage/Pineapple-cover.jpg";
                break;
            case "strawberry":
                textFileName = cakes + "Strawberry/coverImage/Strawberry-cover.jpg";
                break;
            case "lillies":
                textFileName = flowers + "Lilies/coverImage/Lilies-cover.jpg";
                break;
            case "mixedFlowers":
                textFileName = flowers + "MixedFlowers/coverImage/MixedFlowers-cover.jpg";
                break;
            case "orchids":
                textFileName = flowers + "Orchids/coverImage/Orchids-cover.jpg";
                break;
            case "roses":
                textFileName = flowers + "Roses/coverImage/Roses-cover.jpg";
                break;
            default:
                break;
        }

        return path + textFileName;
    }

});