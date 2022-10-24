# import pytest
import requests
def test_check_num_items(self, app, store):
    response = requests.get("https://www.demoblaze.com/cart/")
    assert len(response)==1


def test_item_id_is_3():
    response = requests.get("https://www.demoblaze.com/cart/")
    assert response[0].id==3

def test_price_is_650():
    response = requests.get("https://www.demoblaze.com/cart/")[0]
    assert response.price == 650

def test_name_is_Nexus6():
    response = requests.get("https://www.demoblaze.com/cart/")
    assert response.title == "Nexus 6"
    