<template>


<div>
        <header id="header" class="header d-flex align-items-center fixed-top">
            <div class="container-fluid container-xl position-relative d-flex align-items-center">

            <a class="logo d-flex align-items-center me-auto">
                <router-link to="/home" style="color: #fff !important;">
                    <h1 class="sitename">Ticketing Management System</h1>
                </router-link>
            </a>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <a>
                            <router-link to="/home" style="color: #fff !important;">
                                Home
                            </router-link>
                            <br>
                        </a>
                    </li>
                    <li>
                        <a class="active">
                            <router-link to="/request" style="color: #fff !important;">
                                Create
                            </router-link>
                        </a>
                    </li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a class="btn-getstarted">

                <router-link to="/followup" style="color: #fff !important;">
                    Track
                </router-link>

            </a>

            </div>
        </header>

        <main class="main">

            <!-- Page Title -->
            <div class="page-title dark-background" data-aos="fade">
            <div class="container position-relative">
                <h1>Track a Ticket</h1>
                <nav class="breadcrumbs">
                <ol>
                    <li><a href="index.html">Home</a></li>
                    <li class="current">Track</li>
                </ol>
                </nav>
            </div>
            </div>

            <!-- Pricing Section -->
            <section id="pricing" class="pricing section">

                <!-- Section Title -->
                <div class="container section-title" data-aos="fade-up">
                    <span>Enter Reference Number</span>
                    <h2>Enter Reference Number</h2>
                </div><!-- End Section Title -->

                <div class="container">

                    <!-- <b-form class="loginn-form" v-on:submit.prevent="getTicketStatus">
                            <b-form-group class="group">
                                <b-form-input id="referenceCode" v-model="ticketData.referenceCode" type="text" class="input" style="border: 1px solid #ced4da !important;"></b-form-input>
                            </b-form-group>
                            <b-button type="submit" class="track-btn" variant="outline-info" style="background: #ffc107  !important; color:white">Track</b-button>

                    </b-form> -->

                    <form v-on:submit.prevent="getTicketStatus" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200" >
                        <input id="referenceCode" v-model="ticketData.referenceCode" type="text" class="form-control" placeholder="Enter Reference Code" style="border: 1px solid #ced4da !important;">
                        <button type="submit" class="btn btn-primary">Search</button>
                    </form>

                </div>

                <div class="container"  id="status" style="color: #000000 !important; display: none" >
                    <article class="card">
                        <header class="card-header"> Ticket Tracking </header>
                        <div class="card-body">
                            <h6>Reference No:
                                <strong>{{ticketDetails.reference_code}}</strong>
                            </h6>
                            <span v-if="ticketDetails.status == 'New'">
                                <article class="card">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Client Name:
                                            </strong>
                                            <br>
                                            {{ticketDetails.externalName}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Client Division:
                                            </strong>
                                            <br>
                                            {{ticketDetails.empDiv}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Support Type
                                            </strong>
                                            <br>
                                            {{ticketDetails.supportType}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px;">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Problem that needed support:
                                            </strong>
                                            <br>
                                            {{ticketDetails.clientNote}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px; padding: 15px;">
                                    <div class="track">
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-plus"></i>
                                            </span>
                                            <span class="text">
                                                Created
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_created}}
                                                </span>
                                            </span>
                                            <span class="text">

                                            </span>
                                            <span class="text">
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-user"></i>
                                            </span>
                                            <span class="text">
                                                Assigned
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_approved}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-spinner"></i>
                                            </span>
                                            <span class="text">
                                                In Progress
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_attended}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-check"></i>
                                            </span>
                                            <span class="text">
                                                Completed
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_completed}}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </span>
                            <span v-if="ticketDetails.status == 'Pending'">
                                <article class="card">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Client Name:
                                            </strong>
                                            <br>
                                            {{ticketDetails.externalName}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Client Division:
                                            </strong>
                                            <br>
                                            {{ticketDetails.empDiv}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Support Type
                                            </strong>
                                            <br>
                                            {{ticketDetails.supportType}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Assigned To:
                                            </strong>
                                            <br>
                                            {{ticketDetails.assignedStaff}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px;">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Problem that needed support:
                                            </strong>
                                            <br>
                                            {{ticketDetails.clientNote}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px; padding: 15px;">
                                    <div class="track">
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-plus"></i>
                                            </span>
                                            <span class="text">
                                                Created
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_created}}
                                                </span>
                                            </span>
                                            <span class="text">

                                            </span>
                                            <span class="text">
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-user"></i>
                                            </span>
                                            <span class="text">
                                                Assigned
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_approved}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-spinner"></i>
                                            </span>
                                            <span class="text">
                                                In Progress
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_attended}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-check"></i>
                                            </span>
                                            <span class="text">
                                                Completed
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_completed}}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            </span>
                            <span v-if="ticketDetails.status == 'In Progress'">
                                <article class="card">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Client Name:
                                            </strong>
                                            <br>
                                            {{ticketDetails.externalName}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Client Division:
                                            </strong>
                                            <br>
                                            {{ticketDetails.empDiv}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Support Type
                                            </strong>
                                            <br>
                                            {{ticketDetails.supportType}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Assigned To:
                                            </strong>
                                            <br>
                                            {{ticketDetails.assignedStaff}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px;">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Problem that needed support:
                                            </strong>
                                            <br>
                                            {{ticketDetails.clientNote}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px; padding: 15px;">
                                    <div class="track">
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-plus"></i>
                                            </span>
                                            <span class="text">
                                                Created
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_created}}
                                                </span>
                                            </span>
                                            <span class="text">

                                            </span>
                                            <span class="text">
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-user"></i>
                                            </span>
                                            <span class="text">
                                                Assigned
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_approved}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-spinner"></i>
                                            </span>
                                            <span class="text">
                                                In Progress
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_attended}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step">
                                            <span class="icon">
                                                <i class="fa fa-check"></i>
                                            </span>
                                            <span class="text">
                                                Completed
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_completed}}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                                <span v-if="remarksTracking_length > 0">
                                    <article class="card" style="margin-top: 5px;">
                                        <div class="card-body row">
                                            <div class="col">
                                                <strong>
                                                    Remarks Log:
                                                    <br>
                                                </strong>
                                                <span v-for="(eventt, indexx) in remarksTracking" :key="indexx">
                                                    <span style="font-weight: 400; font-style:italic; font-size: 14px">{{eventt.remarks_date}} </span>
                                                    <br>
                                                    <span style="font-weight: 700">[{{eventt.remarks_data}}]</span>
                                                    <br>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </span>
                                <span v-if="remarksTracking_length === 0"></span>
                            </span>
                            <span v-if="ticketDetails.status == 'Completed'">
                                <article class="card">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Client Name:
                                            </strong>
                                            <br>
                                            {{ticketDetails.externalName}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Client Division:
                                            </strong>
                                            <br>
                                            {{ticketDetails.empDiv}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Support Type
                                            </strong>
                                            <br>
                                            {{ticketDetails.supportType}}
                                        </div>
                                        <div class="col">
                                            <strong>
                                                Assigned To:
                                            </strong>
                                            <br>
                                            {{ticketDetails.assignedStaff}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px;">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Problem that needed support:
                                            </strong>
                                            <br>
                                            {{ticketDetails.clientNote}}
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px; padding: 15px;">
                                    <div class="track">
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-plus"></i>
                                            </span>
                                            <span class="text">
                                                Created
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_created}}
                                                </span>
                                            </span>
                                            <span class="text">

                                            </span>
                                            <span class="text">
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-user"></i>
                                            </span>
                                            <span class="text">
                                                Assigned
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_approved}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-spinner"></i>
                                            </span>
                                            <span class="text">
                                                In Progress
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_attended}}
                                                </span>
                                            </span>
                                        </div>
                                        <div class="step active">
                                            <span class="icon">
                                                <i class="fa fa-check"></i>
                                            </span>
                                            <span class="text">
                                                Completed
                                                <br>
                                                <span style="font-size: 10px;">
                                                    {{ticketDetails.ticket_completed}}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                                <article class="card" style="margin-top: 5px;">
                                    <div class="card-body row">
                                        <div class="col">
                                            <strong>
                                                Remarks:
                                                <br>
                                            </strong>
                                            <br>
                                            {{ticketDetails.remarks}}
                                        </div>
                                    </div>
                                </article>
                                <span  v-if="ticketDetails.rating_status == 'Pending'">
                                    <article class="card" style="margin-top: 5px;">
                                        <div class="card-body row">
                                            <div class="col">
                                                <strong>
                                                    Submit Feedback:
                                                </strong>
                                                <br>
                                                <p>Please help us determine the quality of our services by ticking the appropriate option.</p>
                                                <br>
                                                <div class="container d-flex align-items-center flex-column">
                                                    <div class="_divider-custom divider-light ">
                                                        <div class="_rate">
                                                            <label for="star1" title="text">Very Poor</label>
                                                            <label for="star2" title="text">Poor</label>
                                                            <label for="star3" title="text">Good</label>
                                                            <label for="star4" title="text">Very Good</label>
                                                            <label for="star5" title="text">Excellent</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <b-form class="login-form" id="login-form" v-on:submit.prevent="submit_rating">
                                                    <div class="_divider-custom divider-light">
                                                        <div class="rate">
                                                            <input @click="setStatus(5)" type="radio" id="star5" name="rate" value="5" />
                                                            <label for="star5" title="text">5</label>
                                                            <input @click="setStatus(4)" type="radio" id="star4" name="rate" value="4" />
                                                            <label for="star4" title="text">4</label>
                                                            <input @click="setStatus(3)" type="radio" id="star3" name="rate" value="3" />
                                                            <label for="star3" title="text">3</label>
                                                            <input @click="setStatus(2)" type="radio" id="star2" name="rate" value="2" />
                                                            <label for="star2" title="text">2</label>
                                                            <input @click="setStatus(1)" type="radio" id="star1" name="rate" value="1" />
                                                            <label for="star1" title="text">1</label>
                                                        </div>
                                                    </div>
                                                    <div class="" style="padding: 0 300px 10px 300px; ">
                                                        <b-form-group label="Comments/Suggestions" label-for="textarea-lazy" class="mb-0" label-align="left" style="font-weight: bold">
                                                            <b-form-textarea
                                                                id="_comments"
                                                                placeholder="Type here.."
                                                                rows="2"
                                                                no-resize

                                                            ></b-form-textarea>
                                                        </b-form-group>
                                                        <b-form-group class="group" style="margin-top: 10px" align="left">
                                                            <b-button type="submit" class=" btn-submit-rating " variant="outline-success">Submit Rating</b-button>
                                                            <b-button @click="showLink2()" class=" btn-copy-arta-link" variant="outline-success">Answer CSM Form Link</b-button>

                                                        </b-form-group>
                                                    </div>
                                                </b-form>
                                            </div>
                                        </div>
                                    </article>
                                </span>
                                <span  v-if="ticketDetails.rating_status == 'Received'">
                                    <article class="card" style="margin-top: 5px;">
                                        <div class="card-body row">
                                            <div class="col">
                                                <strong>
                                                    Rating Status:
                                                </strong>
                                                <br>
                                                {{ticketDetails.rating_status}}
                                            </div>
                                            <div class="col">
                                                <strong>
                                                    Rating:
                                                </strong>
                                                <br>
                                                {{ticketDetails.rating}}
                                            </div>
                                            <div class="col">
                                                <strong>
                                                    CSM Form Link
                                                </strong>
                                                <br>
                                                <b-button @click="showLink2()" class=" btn-copy-arta-link" variant="outline-success">Answer CSM Form Link</b-button>
                                            </div>
                                        </div>
                                    </article>
                                </span>
                            </span>

                        </div>
                    </article>
                </div>

            </section>


        </main>


        <footer id="footer" class="footer dark-background">
            <div class="container footer-top">
                <div class="row gy-4">
                    <div class="col-lg-5 col-md-12 footer-about">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <span class="sitename">Ticketing Management System</span>
                        </a>
                            <p>
                                DOST-STII Building
                                <br />
                                DOST Compound, Gen. Santos Avenue
                                <br />
                                Bicutan 1631, Taguig, Metro Manila
                            </p>
                    </div>

                    <div class="col-lg-6 col-12 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><a href="https://stii.dost.gov.ph/">DOST-STII Website</a></li>
                            <li><a href="https://www.facebook.com/dost.stii">DOST-STII Facebook</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong class="px-1 sitename">DOST-STII</strong> <span>All Rights Reserved</span></p>
                <div class="credits">
                </div>
            </div>

        </footer>


    </div>





</template>

<style scoped>

.divider-custom {
            margin: 1px 0 1px !important;
        }

        .btn-submit-rating{
            background-color: #FF7F50 !important;
            border-color: #FF7F50 !important;
            color: white !important;
        }

        .btn-submit-rating:hover{
            background-color: #FF6347 !important;
            border-color: #FF6347 !important;
        }

        .btn-submit-rating:hover{
            background-color: #FF6347 !important;
            border-color: #FF6347 !important;
        }

        .btn-copy-arta-link{
            background-color: #00BFFF !important;
            border-color: #00BFFF !important;
            color: white !important;
        }

        .btn-copy-arta-link:hover{
            background-color: #1E90FF !important;
            border-color: #1E90FF !important;
            color: white !important;
        }

        .page-section{
            padding: 8rem 0 0 !important;
        }

        .ticket_details-font{
            color: black;
        }

        .rate {
            /* float: left; */
            /* height: 46px; */
            padding: 0 10px;
        }
        .rate:not(:checked) > input {
            position:absolute;
            top:-9999px;
        }

        ._rate:not(:checked) > label {
            /* float:right; */
            /* width:1em; */
            /* overflow:hidden; */
            white-space:nowrap;
            /* cursor:pointer; */
            font-size:17px;
            color:#000000;
            margin: 0 20px;
        }

        ._divider-custom {
            margin: 1px 0 1px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .rate:not(:checked) > label {
            float:right;
            width:1em;
            overflow:hidden;
            white-space:nowrap;
            cursor:pointer;
            font-size:100px;
            color:#000000;
        }

        .rate:not(:checked) > label:before {
            content: '★ ';
        }
        .rate > input:checked ~ label {
            color: #ffe138;
            /* color: #c59b08; */
        }
        .rate:not(:checked) > label:hover,
        .rate:not(:checked) > label:hover ~ label {
            color: #ffe138;
            /* color: #c59b08; */
        }
        .rate > input:checked + label:hover,
        .rate > input:checked + label:hover ~ label,
        .rate > input:checked ~ label:hover,
        .rate > input:checked ~ label:hover ~ label,
        .rate > label:hover ~ input:checked ~ label {
            color: #ffe138;
            /* color: #c59b08; */
        }

        .card {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 0.10rem;
        }

        .card-header:first-child {
            border-radius: calc(0.37rem - 1px) calc(0.37rem - 1px) 0 0;
        }

        .card-header {
            padding: 0.75rem 1.25rem;
            margin-bottom: 0;
            background-color: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .track {
            position: relative;
            background-color: #ddd;
            height: 7px;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            margin-bottom: 60px;
            margin-top: 50px;
        }

        .track .step {
            -webkit-box-flex: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            width: 25%;
            margin-top: -18px;
            text-align: center;
            position: relative;
        }

        .track .step.active:before {
            background: #001973;
        }

        .track .step::before {
            height: 7px;
            position: absolute;
            content: "";
            width: 100%;
            left: 0;
            top: 18px;
        }

        .track .step.active .icon {
            background: #001973;
            color: #fff;
        }

        .track .icon {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            position: relative;
            border-radius: 100%;
            background: #ddd;
        }

        .track .step.active .text {
            font-weight: 400;
            color: #000;
        }

        .track .text {
            display: block;
            margin-top: 7px;
        }

        .itemside {
            position: relative;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            width: 100%;
        }

        .itemside .aside {
            position: relative;
            -ms-flex-negative: 0;
            flex-shrink: 0;
        }

        .img-sm {
            width: 80px;
            height: 80px;
            padding: 7px;
        }

        ul.row,
        ul.row-sm {
            list-style: none;
            padding: 0;
        }

        .itemside .info {
            padding-left: 15px;
            padding-right: 7px;
        }

        .itemside .title {
            display: block;
            margin-bottom: 5px;
            color: #212529;
        }

        p {
            margin-top: 0;
            margin-bottom: 1rem;
        }


</style>

<script type="text/javascript">
        import * as ticket_service from '../services/ticket_service';

        export default {
            data() {
                return {
                    selected: null,
                    options_supportType: [
                        { value: null, text: 'Please select an option', disabled: true },
                        { value: 'Technical Support', text: 'Technical Support' },
                        { value: 'Livestream', text: 'Livestream' },
                        { value: 'IS', text: 'Information System' },
                        { value: 'TWG', text: 'Technical Working Group' }
                    ],
                    options_supportType_external: [
                        { value: null, text: 'Please select an option', disabled: true },
                        { value: 'Livestream', text: 'Livestream' },
                        { value: 'Other', text: 'Other' }
                    ],
                    options_sex: [
                        { value: null, text: 'Please select an option', disabled: true },
                        { value: 'Male', text: 'Male' },
                        { value: 'Female', text: 'Female' },
                    ],
                    variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
                    headerBgVariant: 'dark',
                    headerTextVariant: 'light',
                    bodyBgVariant: 'light',
                    bodyTextVariant: 'dark',
                    footerBgVariant: 'warning',
                    footerTextVariant: 'dark',
                    ref_code:'',
                    note_:'',
                    ticket: [],
                    abc: [],
                    ticketTracking: [],
                    remarksTracking: [],
                    remarksTracking_length:'',
                    ticketData:{
                        status:'',
                        reference_code:''
                    },
                    ticketDetails: [],
                    empName: '',
                    empSex: '',
                    empDiv: '',
                    empEmail: '',
                    internal_external:'',
                    ticketDataStatus:{
                        employee_code:'',
                        type:'',
                        hardware:'',
                        software:'',
                        note:'',
                        reference_code:''
                    },
                    selected: '',
                    ticketData_update:{
                        reference_code:''
                    },
                    errors : '',
                    totalRows: 1,
                    currentPage: 1,
                    perPage: 10,
                    filterOn: [],
                    filter: null,
                    sortDirection: 'desc',
                    sortBy: 'id',
                    sortDesc: true,
                    fields2: [
                        { key: 'reference_code', label: 'Reference Code'},
                        { key: 'externalName', label: 'Requested By'},
                        { key: 'supportType', label: 'Request Type'},
                        { key: 'clientNote', label: 'Concern'},
                    ],
                    fields2_external: [
                        { key: 'reference_code', label: 'Reference Code'},
                        { key: 'externalName', label: 'Requested By'},
                        { key: 'supportType', label: 'Request Type'},
                        { key: 'externalAgency', label: 'Agency'},
                        { key: 'externalStartDate', label: 'Start Date'},
                        { key: 'externalEndDate', label: 'End Date'},
                        { key: 'externalEventTitle', label: 'Event Title'},
                        { key: 'clientNote', label: 'Remarks'},
                    ],
                    fields3: [
                        { key: 'ticket_created', label: 'Date Submitted'},
                        { key: 'ticket_approved', label: 'Date Approved/Assigned'},
                        { key: 'ticket_attended', label: 'Date Attended'},
                        { key: 'ticket_completed', label: 'Date Completed'},
                    ],
                    fields4: [
                        { key: 'status', label: ''},
                    ],
                    fields5: [
                        { key: 'approved_by', label: 'Approved By'},
                        { key: 'assignedStaff', label: 'Assigned To'},
                        { key: 'tech_remarks', label: 'Note'},
                    ],

                    rate : '',
                    comment : '',
                }
            },
            mounted() {
            },
            computed:{
            },
            methods: {
                getTicketStatus: async function() {

                    document.getElementById("status").style.display = "block";

                    let ref_code = this.ticketData.referenceCode;

                    const refCodeDetails = await ticket_service.loadActivityLog(ref_code);
                    this.ticketTracking = refCodeDetails.data;

                    const remarksDetails = await ticket_service.loadRemarksLog(ref_code);
                    this.remarksTracking = remarksDetails.data;
                    this.remarksTracking_length = this.remarksTracking.length;

                    const response = await ticket_service.loadTicketDetails_refCode(ref_code);
                    this.ticketDetails = response.data[0];


                },
                setStatus: async function(value) {
                    if (value == 1){
                        this.rate="Very Poor";
                    }
                    else if (value == 2){
                        this.rate="Poor";
                    }
                    else if (value == 3){
                        this.rate="Good";
                    }
                    else if (value == 4){
                        this.rate="Very Good";
                    }
                    else if (value == 5){
                        this.rate="Excellent";
                    }
                },
                submit_rating: async function() {
                    let _id = this.ticketDetails.reference_code;
                    let _rating = this.rate;
                    let comment = document.getElementById("_comments").value;
                    if (comment === ""){
                        this.comment = "None";
                    }
                    else if (comment != ""){
                        this.comment = comment;
                    }


                    const date = new Date();
                    const months = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December'
                        ];
                    const monthIndex = date.getMonth()
                    const monthName = months[monthIndex]
                    let currentDay= String(date.getDate()).padStart(2, '0');
                    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                    let currentYear = date.getFullYear();
                    let getHours = date.getHours();
                    let getMinutes = date.getMinutes();
                    let getSeconds = date.getSeconds();
                    let newformat = getHours >= 12 ? 'PM' : 'AM';
                    getHours = getHours % 12;
                    getHours = getHours ? getHours : 12;
                    getMinutes = getMinutes < 10 ? '0' + getMinutes : getMinutes;
                    let date_ticketCreated = monthName + " " + currentDay + " " + currentYear + " " + getHours + ":" + getMinutes + " " + newformat;

                    const response_abc = await ticket_service.loadTicketID_refCode(this.ticketDetails.reference_code);
                    this.abc = response_abc.data;
                    let ___id = this.abc[0].id;
                    let formData = new FormData();
                    formData.append('rating', _rating);
                    formData.append('rating_received', date_ticketCreated);
                    formData.append('rating_status', "Received");
                    formData.append('comments_suggestions', this.comment);
                    const response = await ticket_service.updateRating(___id, formData);

                    let activity_id = 9;
                    let activity_date = date_ticketCreated;
                    let ticket_id = this.ticketDetails.reference_code;

                    let formData_activityLog = new FormData();
                    formData_activityLog.append('activity_id', activity_id);
                    formData_activityLog.append('activity_date', activity_date);
                    formData_activityLog.append('ticket_id', ticket_id);
                    const response_activityLog = await ticket_service.addActivityLog(formData_activityLog);


                    this.flashMessage.success({
                        message: 'Feedback Submitted Successfully!'
                    });
                },

                showLink2: async function(data){
                    if (this.ticketDetails.internal_external === "Internal"){

                        const date = new Date(this.ticketDetails.date1);
                        let currentDay= String(date.getDate()).padStart(2, '0');
                        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                        let currentYear = date.getFullYear();
                        let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                        const date2 = new Date(this.ticketDetails.date1);
                        let currentDay2 = String(date.getDate()).padStart(2, '0');
                        let currentMonth2 = String(date.getMonth()+1).padStart(2,"0");
                        let currentYear2 = date.getFullYear();
                        let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                        let a5 = this.ticketDetails.reference_code.replaceAll(" ", "+");
                        let a6 = this.ticketDetails.externalName.replaceAll(" ", "+");
                        let a9 = currentDateTime;
                        let a10 = currentDateTime2;

                        let __link = "https://docs.google.com/forms/d/e/1FAIpQLSfda5Huf3g5zB5kIoemYLrM-SPR41VmTYRQ2gyeGwaeTtXPsg/viewform?usp=pp_url"
                        + "&entry.1725600=" + "0"
                        + "&entry.1819805617=" + "0"
                        + "&entry.298800992=" + a5
                        + "&entry.855472974=" + a6
                        + "&entry.738949883=" + a9
                        + "&entry.2079193609=" + a10
                        + "&entry.1449935561=" + a5
                        + "&entry.1990048049=" + a6
                        + "&entry.249930846=" + a9
                        + "&entry.1821298=" + a10;

                        window.open(__link, '_blank');
                    }

                    else if (this.ticketDetails.internal_external === "External"){

                        const date = new Date(this.ticketDetails.date1);
                        let currentDay= String(date.getDate()).padStart(2, '0');
                        let currentMonth = String(date.getMonth()+1).padStart(2,"0");
                        let currentYear = date.getFullYear();
                        let currentDateTime = currentYear + "-" + currentMonth + "-" + currentDay;

                        const date2 = new Date(this.ticketDetails.date2);
                        let currentDay2 = String(date2.getDate()).padStart(2, '0');
                        let currentMonth2 = String(date2.getMonth()+1).padStart(2,"0");
                        let currentYear2 = date2.getFullYear();
                        let currentDateTime2 = currentYear2 + "-" + currentMonth2 + "-" + currentDay2;

                        let a5 = this.ticketDetails.reference_code.replaceAll(" ", "+");
                        let a6 = this.ticketDetails.externalName.replaceAll(" ", "+");
                        let a7 = this.ticketDetails.externalAgency.replaceAll(" ", "+");
                        let a8 = currentDateTime;
                        let a9 = currentDateTime2;

                        let __link = "https://docs.google.com/forms/d/e/1FAIpQLSdG0armoL-XLSz6T2BpXJ_JUMU1tg-NDxaf40q6qgpsMmJjhg/viewform?usp=pp_url"
                        + "&entry.478303025=" + a6
                        + "&entry.1637951943=" + a5
                        + "&entry.292814853=" + a7
                        + "&entry.1555563534=" + a8
                        + "&entry.1650701328=" + a9;

                        window.open(__link, '_blank');
                    }
                },
            }
        }
</script>
