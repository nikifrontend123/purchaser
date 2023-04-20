<template>
    <div style="padding-bottom: 80px;">
        <hr style="margin: 3px 0; opacity: 1;">
        <div class="container my-3">
            <!-- <RouterLink to="/AddOrder">
                <div class="btn btn-warning w-100 fw-semibold">
                    Add New Order
                </div>
            </RouterLink> -->
            <div class="form my-3">
                <select class="form-select" id="Select" aria-label="Floating label select example">
                    <option selected>Open this select menu</option>
                    <option value="1">Current Orders</option>
                    <option value="2">Own Samples</option>
                    <option value="3">Locked Orders</option>
                    <option value="3">Completed orders</option>
                    <option value="3">Favourite orders</option>
                    <option value="3">Cancelled orders</option>
                </select>
            </div>
        </div>
        <div class="search d-flex  d-flex justify-content-between align-items-center w-100">
            <div class="inp ms-3">
                <input type="search" placeholder="Search">
            </div>

            <p class="m-0">
            <div class="btn btn-primary">Reset</div>
            <button type="button" class="btn btn-primary " data-bs-toggle="collapse"
                data-bs-target="#myCollapse">Filters</button>
            </p>
        </div>
        <!-- Collapsible Element HTML -->
        <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex">
                    <TextInputs name="Start Date" type="date" design="floating" />
                    <TextInputs name="End Date" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Colour" type="text" design="floating" />
                <TextInputs name="Filter By Fabric" type="text" design="floating" />
                <div class="first d-flex">
                    <TextInputs name="Per Meter/KG Price Starts" type="date" design="floating" />
                    <TextInputs name="Per Meter/KG Price End" type="date" design="floating" />
                </div>
                <TextInputs name="Filter By Processings" type="text" design="floating" />
                <TextInputs name="Sort Purchase By" type="text" design="floating" />

            </div>
        </div>
        <div class="container">
            <div v-for="order in orders" class="box border border-1 mt-3 container py-3">
                <div class="first d-flex justify-content-between w-100">
                    <div class="txt d-flex  fw-semibold ">
                        <p style="text-decoration: underline;" class="">{{ order.txt1 }}</p>
                    </div>
                    <div class="btnbtn">
                        
                        <div class="dropdown">
                            <button class="btn  " type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-three-dots-vertical"></i>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item text-warning" href="#">Lock Order</a></li>
                                <li><a class="dropdown-item text-info" href="#">Revice Order</a></li>
                                <li><a class="dropdown-item text-success" href="#">Cancel Order</a></li>
                                <!-- <li><a class="dropdown-item text-danger" href="#">Reject</a></li> -->
                            </ul>
                        </div>
                    </div>
                </div>
                <p class="m-0">{{ order.txt2 }}</p>
                <div class="sec mt-2">
                    <b>{{ order.tag }}</b>
                </div>
                <div class="fourth mt-3">
                    <RouterLink to="/OrderDetail">
                        <img :src="order.img" alt="" class="w-100">
                    </RouterLink>
                </div>
                <div class="fourth w-100 mt-2">
                    <button class="btn btn-warning w-100">{{order.btn}}</button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';

export default {
    components: {
        TextInputs,
    },
    computed: {
        orders() {
            return this.$store.getters.getOrders;
        }
    }
}
</script>

<style lang="scss" scoped></style>