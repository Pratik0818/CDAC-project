import React, { Component } from 'react'

export default class Mid extends Component {
    render() {
        return (
            <div>
                <div class="m-5 pb-5 row">
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">A</h5>
                                <p class="card-text">text.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">B</h5>
                                <p class="card-text">text.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
