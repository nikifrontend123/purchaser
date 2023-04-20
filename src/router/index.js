import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Sample from "../components/Sample/Sample.vue";
import SampleDetails from "../components/Sample/SampleDetails.vue";
import Order from "../components/Orders/Order.vue";
import OrderDetail from "../components/Orders/OrderDetail.vue";
import Demand from "../components/Demand/Demand.vue";
import Reorder from "../components/Demand/Re-order.vue";
import Payment from "../components/Payment/Payment.vue";
import PaymentDetail from "../components/Payment/PaymentDetail.vue";
import Notification from "../components/Notification/Notification.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/Sample",
      name: "Sample",
      component: Sample,
    },
        {
      path: "/SampleDetails",
      name: "SampleDetails",
      component: SampleDetails,
    },
    {
      path: "/Order",
      name: "Order",
      component: Order,
    },
    {
      path: "/OrderDetail",
      name: "OrderDetail",
      component: OrderDetail,
    },
    {
      path: "/Demand",
      name: "Demand",
      component: Demand,
    },
    {
      path: "/Reorder",
      name: "Re-order",
      component: Reorder,
    },
    {
      path: "/Payment",
      name: "Payment",
      component: Payment,
    },
    {
      path: "/PaymentDetail",
      name: "PaymentDetail",
      component: PaymentDetail,
    },
    {
      path: "/Notification",
      name: "Notification",
      component: Notification,
    },
    
  ],
});

export default router;
