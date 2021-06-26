/* 
 * Some render related helper functions
 * @author Phillip Kruger (phillip.kruger@gmail.com)
 */
import {html, render} from 'https://cdn.jsdelivr.net/npm/lit-html@1.3.0/lit-html.min.js';

export function renderData(template, root){
    
    var t = html`${commonCss()}
                ${template}`;
    
    render(t, root);
}

const loading = html`${commonCss()}
            <div class="ui segment" id="content">
            <!-- Here we add the card -->
            
            <div class="ui fluid placeholder">
                <div class="header">
                    <div class="line"></div>
                </div>
                <div class="paragraph">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
`;
export function renderLoading(title, root){
    const heading = html`<div class="ui primary top attached borderless large inverted menu">
        <div class="header item">${title}</div>
    </div>`;
    
    var t = html`${heading}
                ${loading}`;
    
    render(t, root);
}

function commonCss(){
    return html`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/fomantic-ui@2.8.7/dist/semantic.min.css">`;
}