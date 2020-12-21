package com.example.domainmodeling.mobprogramming;

import java.util.List;

public class ShoppingCart {

    private String id;
    private List<CartItem> items;
    private Customer customer;
    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(final Customer customer) {
        this.customer = customer;
    }

    public List<CartItem> getItems() {
        return items;
    }

    public void setItems(final List<CartItem> items) {
        this.items = items;
    }
}