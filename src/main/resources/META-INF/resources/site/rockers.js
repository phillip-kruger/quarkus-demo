/**
 * List all rockers.
 * This shows all the rockers we know about
 * 
 * @author Phillip Kruger (phillip.kruger@gmail.com)
 */

import {html, render} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/lit-html.min.js';
import {repeat} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/directives/repeat.js';
import {unsafeHTML} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/directives/unsafe-html.js';

import {renderData, renderLoading} from './render.js';
import {RestClient} from './restclient.js';

let restClient = new RestClient();

const addBandHandler = {
    handleEvent(e) { 
        $('#modelNewBand')
            .modal('show')
        ;
        $('.ui.calendar').calendar({
            type: 'date',
            formatter: {
                date: function (date, settings) {
                    if (!date) return '';
                    var day = date.getDate() + '';
                    if (day.length < 2) {
                        day = '0' + day;
                    }
                    var month = (date.getMonth() + 1) + '';
                    if (month.length < 2) {
                        month = '0' + month;
                    }
                    var year = date.getFullYear();
                    return year + '-' + month + '-' + day;
                }
            }
        });
        
    },
    capture: true,
}

const saveNewBandHandler = {
    handleEvent(e) { 
        var band = document.getElementById("txtNewBandName").value;
        document.getElementById("txtNewBandName").value = "";
        var since = document.getElementById("txtNewBandSince").value;
        document.getElementById("txtNewBandSince").value = "";
        
        if(band && since){

            var path = '/rockers';
            var params = {
                'band': band,
                'since': since
            };
        
            restClient.form(path, params).then(data => {
                var bandTemplate = card(data);
                var maingrid = document.getElementById("maingrid");    
                var newColumn = document.createElement('div');
                newColumn.className = "column";
                var newElement = maingrid.appendChild(newColumn);
                render(bandTemplate,newElement);
            });
            
        }

        $('#modelNewBand')
            .modal('hide')
        ;
        
        
    },
    capture: true,
}

const addMemberHandler = {
    handleEvent(e) { 
        
        var bandName = e.target.dataset.band;
        sessionStorage.setItem("selectedBand", bandName);
        $('#modelNewMember')
            .modal('show')
        ;
        
        $('.selection.dropdown')
            .dropdown()
        ;
    },
    capture: true,
}

const saveNewMemberHandler = {
    handleEvent(e) { 

        var bandName = sessionStorage.getItem("selectedBand");
        sessionStorage.removeItem("selectedBand");
        var name = document.getElementById("txtNewMemberName").value;
        document.getElementById("txtNewMemberName").value = "";
        var role = document.getElementById("txtNewMemberRole").value;
        document.getElementById("txtNewMemberRole").value = "";
        
        var id = "table" + bandName;
        var table = document.getElementById(id)
        
        var path = '/rockers/' + bandName;
        var params = {
            'name': name,
            'role': role
        };
        
        restClient.form(path, params).then(data => {
            let row = table.insertRow(-1);

            let col1 = row.insertCell(0);
            let col2 = row.insertCell(1);
            let col3 = row.insertCell(2);

            let newName = document.createTextNode(data.name);
            col1.appendChild(newName);
            let newRole = document.createTextNode(data.role);
            col2.appendChild(newRole);

            render(deleteIcon(bandName,data.id), col3);
        });
        $('#modelNewMember')
            .modal('hide')
        ;
    },
    capture: true,
};

const removeHandler = {
    handleEvent(e) { 
        
        var bandName = e.target.dataset.band;
        var memberId = e.target.dataset.member;
        var row = e.target.parentElement.parentElement;
        var path = '/rockers/' + bandName + '/' + memberId;
        
        restClient.del(path).then(() => {
            row.parentNode.removeChild(row);
        });
            
    },
    capture: true,
};

const template = (data) => html`<div class="column">
                                    ${card(data)}
                                </div>`;

const card = (data) => html`<div class="ui inverted top attached borderless large inverted menu">
                                <div class="header item" style="font-family: 'Pirata One', cursive;">${data.name}</div>
                                <div class="right menu">
                                    <a class="ui item">
                                        <i class="white plus square outline link icon" data-band="${data.name}" @click=${addMemberHandler}></i>
                                    </a>
                                </div>
                            </div>
                            <table id="table${data.name}" class="ui attached padded segment very basic unstackable very compact table ">
                                ${repeat(data.bandmembers, (member) => member.name, (member, index) => row(data.name, member))}
                            </table>
                                `;

const row = (bandname, member) => html`<tr>
                                   <td data-label="Name">${member.name}</td>
                                   <td data-label="Role">${member.role}</td>
                                   <td data-label="Remove">${deleteIcon(bandname, member.id)}</td>
                                </tr>
                            `;

const deleteIcon = (bandname, memberid) => html`<i class="red ui right floated trash alternate outline link icon" data-band="${bandname}" data-member="${memberid}" @click=${removeHandler}></i>`;

function init(){
        
        var path = '/rockers';
        
        restClient.get(path).then((rockers) => {
            const bands = [];
            for (const band of rockers) {
                var bandTemplate = template(band);
                bands.push(html`${bandTemplate}`);
            }

            var t = html`<div id="maingrid" class="ui three column grid">
                    ${bands}
                </div>

                <bu$('.selection.dropdown')
  .dropdown()
;tton class="ui right floated huge green circular icon button">
                    <i class="plus icon" @click=${addBandHandler}></i>
                </button><br/>
                `;

            var root = document.getElementById("root");    

            renderData(t, root);
        });
}

window.onload = init;

document.getElementById("btnNewBand").addEventListener("click", saveNewBandHandler);
document.getElementById("btnNewMember").addEventListener("click", saveNewMemberHandler);