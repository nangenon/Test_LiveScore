/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
		  this.renderHome();
//        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
			
    },
	// Update DOM on a Received Event
	renderHome: function() {
	$.ajax({
		type: 'GET',
		url : "http://livescore.creaweb.fr:8000/table1.json", 
		crossDomain: true,
//		beforeSend: function () {$.mobile.loading('show')},
//		complete: function () {$.mobile.loading('hide')},
		dataType : 'json',
		success : function( data ) {
			alert( data.Joueur1_name );
			$( ".joueur1_name" ).html( data.Joueur1_name );
			$( ".joueur1_country" ).html( data.Joueur1_country );
			$( ".joueur2_name" ).html( data.Joueur2_name );
			$( ".joueur2_country" ).html( data.Joueur2_country ); 	
		}
		
	});
		
}
};


