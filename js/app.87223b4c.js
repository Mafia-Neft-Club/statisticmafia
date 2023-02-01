'use strict';
(function(modules) {
    /**
     * @param {!Object} element
     * @return {?}
     */
    function push(element) {
        var moduleId; 
        var script_id;
        var crossfilterable_layers = element[0];
        var appliedUpdate = element[1];
        var options = element[2];
        /** @type {number} */
        var layer_i = 0;
        /** @type {!Array} */
        var _sizeAnimateTimeStamps = [];
        for (; layer_i < crossfilterable_layers.length; layer_i++) {
            script_id = crossfilterable_layers[layer_i];
            if (script[script_id]) {
                _sizeAnimateTimeStamps.push(script[script_id][0]);
            }
            /** @type {number} */
            script[script_id] = 0;
        }
        for (moduleId in appliedUpdate) {
            if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
                modules[moduleId] = appliedUpdate[moduleId];
            }
        }
        if (addRemoveClassesPostDigest) {
            addRemoveClassesPostDigest(element);
        }
        for (; _sizeAnimateTimeStamps.length;) {
            _sizeAnimateTimeStamps.shift()();
        }
        return tokens.push.apply(tokens, options || []), resolve();
    }
    /**
     * @return {?}
     */
    function resolve() {
        var x;
        /** @type {number} */
        var i = 0;
        for (; i < tokens.length; i++) {
            var m = tokens[i];
            /** @type {boolean} */
            var a = true;
            /** @type {number} */
            var t = 1;
            for (; t < m.length; t++) {
                var type = m[t];
                if (0 !== script[type]) {
                    /** @type {boolean} */
                    a = false;
                }
            }
            if (a) {
                tokens.splice(i--, 1);
                x = r(r.s = m[0]);
            }
        }
        return x;
    }
    /**
     * @param {string} i
     * @return {?}
     */
    function r(i) {
        if (n[i]) {
            return n[i].exports;
        }
        var module = n[i] = {
            i : i,
            l : false,
            exports : {}
        };
        return modules[i].call(module.exports, module, module.exports, r), module.l = true, module.exports;
    }
    var n = {};
    var script = {
        app : 0
    };
    /** @type {!Array} */
    var tokens = [];
    r.m = modules;
    r.c = n;
    /**
     * @param {!Function} d
     * @param {string} name
     * @param {!Function} n
     * @return {undefined}
     */
    r.d = function(d, name, n) {
        if (!r.o(d, name)) {
            Object.defineProperty(d, name, {
                enumerable : true,
                get : n
            });
        }
    };
    /**
     * @param {!Object} x
     * @return {undefined}
     */
    r.r = function(x) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) {
            Object.defineProperty(x, Symbol.toStringTag, {
                value : "Module"
            });
        }
        Object.defineProperty(x, "__esModule", {
            value : true
        });
    };
    /**
     * @param {string} e
     * @param {number} a
     * @return {?}
     */
    r.t = function(e, a) {
        if (1 & a && (e = r(e)), 8 & a) {
            return e;
        }
        if (4 & a && "object" === typeof e && e && e.__esModule) {
            return e;
        }
        /** @type {!Object} */
        var d = Object.create(null);
        if (r.r(d), Object.defineProperty(d, "default", {
            enumerable : true,
            value : e
        }), 2 & a && "string" != typeof e) {
            var a;
            for (a in e) {
                r.d(d, a, function(childProp) {
                    return e[childProp];
                }.bind(null, a));
            }
        }
        return d;
    };
    /**
     * @param {!Object} module
     * @return {?}
     */
    r.n = function(module) {
        /** @type {function(): ?} */
        var n = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        return r.d(n, "a", n), n;
    };
    /**
     * @param {!Function} e
     * @param {string} x
     * @return {?}
     */
    r.o = function(e, x) {
        return Object.prototype.hasOwnProperty.call(e, x);
    };
    /** @type {string} */
    r.p = "/";
    var p = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var choiceParagraphElement = p.push.bind(p);
    /** @type {function(!Object): ?} */
    p.push = push;
    p = p.slice();
    /** @type {number} */
    var x = 0;
    for (; x < p.length; x++) {
        push(p[x]);
    }
    var addRemoveClassesPostDigest = choiceParagraphElement;
    tokens.push([0, "chunk-vendors"]);
    resolve();
})({
    0 : function(module, object, instantiate) {
        module.exports = instantiate("56d7");
    },
    "034f" : function(srcVersion, runtime, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__("1356");
        var clonedI = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
        clonedI.a;
    },
    1356 : function(branchData, beforeZero, afterZero) {
    },
    2403 : function(srcVersion, runtime, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__("7de0");
        var clonedI = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
        clonedI.a;
    },
    "56d7" : function(vdwB, d, $) {
        $.r(d);
        $("cadf");
        $("551c");
        $("f751");
        $("097d");
        var settings = $("2b0e");
        /**
         * @return {?}
         */
        var Element = function() {
            var _vm = this;
            var _h = _vm.$createElement;
            var createElement = _vm._self._c || _h;
            return createElement("div", {
                attrs : {
                    id : "app"
                }
            }, [createElement("Statistics")], 1);
        };
        /** @type {!Array} */
        var _maskLayer = [];
        /**
         * @return {?}
         */

        var numberOfViwed = 0;
        var searchPhrase = '';
        var arrOfSearched = [];

        var render = function() {
            var self = this;
            var _h = self.$createElement;
            var h = self._self._c || _h;          
            return self.database ? h("md-tabs", [h("md-tab", {
                attrs : {
                    id : "tab-base",
                    "md-label" : "\u0420\u0435\u0439\u0442\u0438\u043d\u0433"
                }
            }, [
                h("div", { staticClass : "search-block" }, 
                    [self._v("\u0418\u0433\u0440\u043e\u043a: "), 
                        h("input", { 
                            attrs : {
                                type : 'text'
                            }, 
                            staticClass : 'search-field',
                            on : {
                                "keyup" : function(e) {
                                    if ((e.key === 'Enter' || e.keyCode === 13) && e.target.value.length > 0){
                                       e.target.nextElementSibling.click()
                                    }                                    
                                }
                            }
                        }),
                        h("i", {
                            staticClass : "v-icon notranslate mdi mdi-magnify theme--light",
                            style : {"cursor" : "pointer"},
                            on : {
                                "click" : function(e) {                                     

                                    var searchValue = e.target.previousElementSibling.value.toLowerCase();

                                    if(searchValue.length > 0){

                                        arrOfSearched = [];

                                        var tds = document.getElementsByClassName("playerName"); 

                                        // получаю подходящие ячейки и записываю в массив
                                        for (var i = 0; i < tds.length; i++) {
                                            var index = tds[i].innerText.toLowerCase().indexOf(searchValue);                                           
                                            if (index != -1) { 
                                                arrOfSearched.push(tds[i]);                                               
                                            } 
                                            // скрываю подсветку всех ячеек
                                            tds[i].children[0].style.backgroundColor = "";
                                        } 

                                        // если поисковая фраза не поменялась
                                        // указываю номер ячейки, который равен следущему после уже просмотренного
                                        // или первый если дошли до конца массива
                                        if(searchPhrase == searchValue){
                                            if(numberOfViwed == arrOfSearched.length - 1){
                                                numberOfViwed = 0;
                                            } else {
                                                numberOfViwed ++;
                                            }
                                        } else {
                                            numberOfViwed = 0;
                                            searchPhrase = searchValue;
                                        }                                            
                                            
                                        // подсвечиваю ячейку с нужным порядковым номером если был найден хотя бы один игрок
                                        if(arrOfSearched.length > 0) {
                                            arrOfSearched[numberOfViwed].children[0].style.backgroundColor = "rgb(78 198 84)";
                                            arrOfSearched[numberOfViwed].scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'end'
                                            });
                                        } else {
                                            alert('Игрок ' + e.target.previousElementSibling.value + ' не найден');
                                        }                                        
                                                                              
                                    } else {
                                        alert('Введите игрока')
                                    }                       
                                }
                            }
                        }),
                    ]
                ),
                h("div", [h("v-data-table", {
                attrs : {
                    headers : self.headers,
                    items : self.playerStatisticsForDisplay,
                    "fixedHeader" : "",
                    "height" : "700",
                    "fixed-header" : "",
                    "disable-pagination" : "",
                    "hide-default-footer" : "",
                    "multi-sort" : "",
                    "mobile-breakpoint" : "0",
                    "sort-by" : ["isRating", "relativePoints"],
                    "sort-desc" : [true, true]
                },
                scopedSlots : self._u([{
                    key : "item",
                    fn : function(sender) {
                        var item = sender.item;
                        return [h("tr", {
                            class : {
                                notRating : !item.isRating
                            }
                        }, [h("td", {
                            class : {
                                topLevelPlayers : sender.index < 10
                            }
                        }, [self._v(self._s(sender.index + 1))]), h("td", { staticClass : "playerName" }, [h("span", [self._v(self._s(item.name))])]), h("td", {
                            style : item.isRating ? {
                                "background-color" : "rgb(255, 255, " + (255 - Math.round(item.relativePoints)%255) + ")"
                            } : {}
                        }, [self._v(self._s(item.relativePoints || 0))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.games))]), h("td", [self._v(self._s(item.wins))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.firstKilled))]), h("td", [self._v(self._s(item.firstKilledGuessPoints.toFixed(2)))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.sherif))]), h("td", [self._v(self._s(item.sherifWins))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.citizen))]), h("td", [self._v(self._s(item.citizenWins))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.don))]), h("td", [self._v(self._s(item.donWins))]),
                            h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.maf))]), h("td", [self._v(self._s(item.mafWins))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.ci))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.additionalPoints))]), h("td", { style : {"border-left" : "1px solid #dddddd"}}, [self._v(self._s(item.absolutePoints))])])];
                    }
                }], null, false, 3914092594)
            })], 1), h("div", {
                staticClass : "games-statistic games-statistic-all"
            }, [self._v("\u0412\u0441\u0435\u0433\u043e \u0438\u0433\u0440: " + self._s(self.gamesCount))]), h("div", {
                staticClass : "games-statistic games-statistic-red-wins"
            }, [self._v("\u041f\u043e\u0431\u0435\u0434 \u043c\u0438\u0440\u043d\u044b\u0445: " + self._s(self.redWinsCount + " (" + Math.round(self.redWinsCount / self.gamesCount * 100) + "%)"))]), h("div", {
                staticClass : "games-statistic games-statistic-black-wins"
            }, [self._v("\u041f\u043e\u0431\u0435\u0434 \u043c\u0430\u0444\u0438\u0438: " + self._s(self.blackWinsCount + " (" + Math.round(self.blackWinsCount / self.gamesCount * 100) + "%)"))]), h("div", {
                staticClass : "games-statistic games-statistic-rating"
            }, [self._v("\u0418\u0433\u0440 \u0434\u043b\u044f \u043f\u043e\u043f\u0430\u0434\u0430\u043d\u0438\u044f \u0432 \u0440\u0435\u0439\u0442\u0438\u043d\u0433: " + self._s(self.gamesForRatingCount) + " (14%)")])]), h("md-tab", {
                attrs : {
                    id : "tab-roles",
                    "md-label" : "\u041f\u043e \u0440\u043e\u043b\u044f\u043c"
                }
            }, [h("RoleStatistic", {
                attrs : {
                    playerStatisticsForDisplay : self.playerStatisticsForDisplayRating,
                    players : self.ratingPlayers
                }
            })], 1), h("md-tab", {
                attrs : {
                    id : "tab-players",
                    "md-label" : "\u041f\u043e \u0438\u0433\u0440\u043e\u043a\u0430\u043c"
                }
            }, [h("PlayerStatistic", {
                attrs : {
                    playerStatisticsForDisplay : self.playerStatisticsForDisplayRating,
                    players : self.ratingPlayers
                }
            })], 1), h("md-tab", {
                attrs : {
                    id : "tab-box",
                    "md-label" : "\u041f\u043e \u043d\u043e\u043c\u0435\u0440\u0430\u043c"
                }
            }, [h("BoxStatistic", {
                attrs : {
                    playerStatisticsForDisplay : self.playerStatisticsForDisplayRating,
                    players : self.ratingPlayers
                }
            })], 1), h("md-tab", {
                attrs : {
                    id : "tab-game",
                    "md-label" : "\u0418\u0433\u0440\u044B"
                }
            }, [h("GameStatistic", {
                attrs : {
                   games : this.games,
                   players : this.players,
                }
            })], 1)], 1) : self._e();
        };
        /** @type {!Array} */
        var numKeysDeleted = [];
        var attrs = ($("6c7b"), $("ac6a"), $("7514"), $("7f7f"), $("55dd"), $("a481"), $("28a5"), $("96cf"), $("3b8d"));
        /**
         * @return {?}
         */
        var show = function() {
            var self = this;
            var _h = self.$createElement;
            var _extends = self._self._c || _h;
            return _extends("v-data-table", {
                attrs : {
                    headers : self.headers,
                    items : self.items,
                    options : self.options,
                    "server-items-length" : 1,
                    "disable-pagination" : "",
                    "hide-default-footer" : "",
                    "must-sort" : ""
                },
                on : {
                    "update:options" : function(tmp) {
                        /** @type {!Object} */
                        self.options = tmp;
                    }
                },
                scopedSlots : self._u([{
                    key : "item.sherif",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.sherifWinPercent)
                            }
                        }, [self._v(self._s(item.sherif) + "/" + self._s(item.sherifWins) + "\u00a0\u00a0\u00a0" + self._s(item.sherifWinPercent) + "%")])];
                    }
                }, {
                    key : "item.citizen",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.citizenWinPercent)
                            }
                        }, [self._v(self._s(item.citizen) + "/" + self._s(item.citizenWins) + "\u00a0\u00a0\u00a0" + self._s(item.citizenWinPercent) + "%")])];
                    }
                }, {
                    key : "item.don",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.donWinPercent)
                            }
                        }, [self._v(self._s(item.don) + "/" + self._s(item.donWins) + "\u00a0\u00a0\u00a0" + self._s(item.donWinPercent) + "%")])];
                    }
                }, {
                    key : "item.maf",
                    fn : function(sender) {
                        var item = sender.item;
                        return [ _extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.mafWinPercent)
                            }
                        }, [self._v(self._s(item.maf) + "/" + self._s(item.mafWins) + "\u00a0\u00a0\u00a0" + self._s(item.mafWinPercent) + "%")])];
                    }
                }])
            });
        };
        /** @type {!Array} */
        var whiteTable2 = [];
        var python_django = ($("6762"), $("2fdb"), {
            name : "RoleStatistic",
            props : {
                playerStatisticsForDisplay : Array,
                players : Array
            },
            data : function() {
                return {
                    items : [],
                    options : {},
                    headers : [{
                        text : "\u0418\u0433\u0440\u043e\u043a",
                        value : "name"
                    }, {
                        text : "\u0428\u0435\u0440\u0438\u0444",
                        value : "sherif"
                    }, {
                        text : "\u041c\u0438\u0440\u043d\u044b\u0439",
                        value : "citizen"
                    }, {
                        text : "\u0414\u043e\u043d",
                        value : "don"
                    }, {
                        text : "\u041c\u0430\u0444",
                        value : "maf"
                    }]
                };
            },
            watch : {
                options : {
                    handler : function() {
                        var self = this;
                        this.getData().then(function(data) {
                            self.items = data.items;
                        });
                    },
                    deep : true
                }
            },
            methods : {
                displayChip : function(properties, id) {
                    /** @type {string} */
                    var str = id + "WinPercent";
                    var size = this.getHighligting(properties[str], properties[id]);
                    return "none" != size;
                },
                getColorPerc : function(perc) {
                    var r, g, b = 0;
                    if(perc < 50) {
                        r = 255;
                        g = Math.round(5.1 * perc);
                    }
                    else {
                        g = 255;
                        r = Math.round(510 - 5.10 * perc);
                    }
                    var h = r * 0x10000 + g * 0x100 + b * 0x1;
                    return '#' + ('000000' + h.toString(16)).slice(-6);
                },
                getColor : function(s, id) {
                    /** @type {string} */
                    var str = id + "WinPercent";
                    return this.getHighligting(s[str], s[id]);
                },
                getHighligting : function(i, t) {
                    return 0 == t ? "none" : 100 == i ? "rgb(0, 255, 0)" : i > 60 ? "rgba(0, 255, 0, 0.5)" : 0 == i ? "rgb(255, 0, 0)" : "none";
                },
                getData : function() {
                    var self = this;
                    return new Promise(function(resolve) {
                        var params = self.options;
                        var field = params.sortBy;
                        var match = params.sortDesc;
                        var result = self.playerStatisticsForDisplay.slice(0);
                        var diff = result.length;
                        if (1 === field.length && 1 === match.length || 0 == field.length) {
                            /** @type {string} */
                            var key = "name";
                            /** @type {boolean} */
                            var reason = false;
                            if (1 == field.length) {
                                key = field[0];
                                reason = match[0];
                            }
                            result = result.sort(function(expr, next) {
                                if (["sherif", "citizen", "don", "maf"].includes(key)) {
                                    return self.percentSort(expr, next, key, reason);
                                }
                                var c = expr[key];
                                var f = next[key];
                                return reason ? c < f ? 1 : c > f ? -1 : 0 : c < f ? -1 : c > f ? 1 : 0;
                            });
                        }
                        resolve({
                            items : result,
                            total : diff
                        });
                    });
                },
                percentSort : function(lhs, rhs, property, text) {
                    /** @type {string} */
                    var RAW_ID = property + "WinPercent";
                    return lhs[RAW_ID] > rhs[RAW_ID] ? text ? -1 : 1 : lhs[RAW_ID] < rhs[RAW_ID] ? text ? 1 : -1 : lhs[property] > rhs[property] ? text ? -1 : 1 : lhs[property] < rhs[property] ? text ? 1 : -1 : 0;
                }
            }
        });
        var name = python_django;
        var attributes = $("2877");
        var script = $("6544");
        var require = $.n(script);
        var m = $("cc20");
        var j = $("8fea");
        var result = Object(attributes["a"])(name, show, whiteTable2, false, null, null, null);
        var exported = result.exports;
        require()(result, {
            VChip : m["a"],
            VDataTable : j["a"]
        });

        var updateGames = function() {
            var self = this;
            var _h = self.$createElement;
            var _extends = self._self._c || _h;

            return self.chosenDate ? _extends("div", {
                staticClass : "date-statistic"
            }, [_extends("div", {
                staticClass : "select-date-container"
            }, [_extends("div", {
                staticClass : "date-lable"
            }, [self._v("\u0414\u0430\u0442\u0430: "), _h("input", {
                attrs : {
                    type : 'date',
                    value: self.chosenDate
                },
                on : {
                    "change" : function(e) {
                        self.chosenDate = e.target.value
                    }
                },
                staticClass : 'date-field',
            })])]), _extends("v-data-table", {
                attrs : {
                    headers : self.headers,
                    items : self.items,
                    options : self.options,
                    "server-items-length" : 1,
                    "disable-pagination" : "",
                    "hide-default-footer" : "",
                    "must-sort" : ""
                },
                on : {
                    "update:options" : function(tmp) {
                        /** @type {!Object} */
                        self.options = tmp;
                    }
                },
                scopedSlots : self._u([{
                    key : "item.number",
                    fn : function(sender) {
                        var item = sender.item;
                        return [self._v(self._s(item.number))];
                    }
                },
                {
                    key : "item.games",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", [self._v(self._s(item.games))])];
                    }
                }])
            })], 1) : self._e();
        };

        var gameTab = {
            name : "GameStatistic",
            props : {
                games : Array,
                players : Array
            },
            data : function() {
                return {
                    chosenDate: null,
                    items : [],
                    options : {},
                    headers : [{
                        text : "\u041D\u043E\u043C\u0435\u0440",
                        value : "number",
                        sortable : false
                    },{
                        text : "\u0418\u0433\u0440\u043e\u043a",
                        value : "name"
                    },{
                        text : "\u0418\u0433\u0440",
                        value : "games",
                    }]
                };
            },
            mounted : function() {
                const today = new Date();
                const yyyy = today.getFullYear();
                let mm = today.getMonth() + 1; // Months start at 0!
                let dd = today.getDate();
                if (dd < 10) dd = '0' + dd;
                if (mm < 10) mm = '0' + mm;
                this.chosenDate = yyyy + '-' + mm + '-' + dd;
            },
            watch : {
                chosenDate : function() {
                    this.updateTable();
                },
                options : {
                    handler : function() {
                        this.updateTable();
                    },
                    deep : true
                }
            },
            methods : {
                updateTable : function() {
                    var self = this;
                    this.getData().then(function(data) {
                        self.items = data.items;
                    });
                },
                getPlayerName : function(e) {
                    return this.players.find(function(elem) {
                        return elem.id === e;
                    }).name;
                },
                findByDate : function() {
                    var self = this;

                    var result = [];

                    self.players.forEach(function(player){
                        var item = {};
                        var existingGames = self.games.filter(function(elem) {
                            return (elem.date == self.chosenDate && elem.players.indexOf(player.id) > -1)
                        }).length;

                        if(existingGames > 0){
                            item.name = self.getPlayerName(player.id)
                            item.games = existingGames
                            result.push(item)
                        }

                    });

                    return result;
                },
                getData : function(){
                    var self = this;
                    return new Promise(function(resolve) {
                        var params = self.options;
                        var field = params.sortBy;
                        var match = params.sortDesc;
                        var result = self.findByDate().slice(0);
                        var diff = result.length;
                        if (void 0 == field || 1 === field.length && 1 === match.length || 0 === field.length) {
                            /** @type {string} */
                            var key = "name";
                            /** @type {boolean} */
                            var reason = false;
                            if (void 0 != field && 1 == field.length) {
                                key = field[0];
                                reason = match[0];
                            }
                            result = result.sort(function(expr, next) {
                                var c = expr[key];
                                var f = next[key];
                                return reason ? c < f ? 1 : c > f ? -1 : 0 : c < f ? -1 : c > f ? 1 : 0;
                            });

                            result.forEach(function(item, key){
                                item.number = key + 1;
                            });
                        }

                        resolve({
                            items : result,
                            total : diff
                        });
                    });
                }
            }
        }
        var gameResult = Object(attributes["a"])(gameTab, updateGames, [], false, null, null, null);
        var exportedGameResult = gameResult.exports;
        require()(gameResult, {
            VChip : m["a"],
            VDataTable : j["a"]
        });

        /**
         * @return {?}
         */
        var update = function() {
            var self = this;
            var _h = self.$createElement;
            var _extends = self._self._c || _h;
            return self.selectedPlayerId ? _extends("div", {
                staticClass : "player-statistic"
            }, [_extends("div", {
                staticClass : "select-player-container"
            }, [_extends("div", {
                staticClass : "player-lable"
            }, [self._v("\u0418\u0433\u0440\u043e\u043a:")]), _extends("div", {
                staticClass : "player-selector"
            }, [_extends("model-list-select", {
                attrs : {
                    list : self.players,
                    "option-value" : "id",
                    "option-text" : "name",
                    placeholder : "\u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0433\u0440\u043e\u043a\u0430"
                },
                model : {
                    value : self.selectedPlayerId,
                    callback : function(t) {
                        /** @type {string} */
                        self.selectedPlayerId = t;
                    },
                    expression : "selectedPlayerId"
                }
            })], 1)]), _extends("v-data-table", {
                attrs : {
                    headers : self.headers,
                    items : self.items,
                    options : self.options,
                    "server-items-length" : 1,
                    "disable-pagination" : "",
                    "hide-default-footer" : "",
                    "must-sort" : ""
                },
                on : {
                    "update:options" : function(tmp) {
                        /** @type {!Object} */
                        self.options = tmp;
                    }
                },
                scopedSlots : self._u([{
                    key : "item.bothRed",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.bothRedWinPercent)
                            }
                        }, [self._v(self._s(item.bothRed) + "/" + self._s(item.bothRedWins) + "\u00a0\u00a0\u00a0" + self._s(item.bothRedWinPercent) + "%")])];
                    }
                }, {
                    key : "item.bothBlack",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.bothBlackWinPercent)
                            }
                        }, [self._v(self._s(item.bothBlack) + "/" + self._s(item.bothBlackWins) + "\u00a0\u00a0\u00a0" + self._s(item.bothBlackWinPercent) + "%")])];
                    }
                }, {
                    key : "item.playerRed",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.playerRedWinPercent)
                            }
                        }, [self._v(self._s(item.playerRed) + "/" + self._s(item.playerRedWins) + "\u00a0\u00a0\u00a0" + self._s(item.playerRedWinPercent) + "%")])];
                    }
                }, {
                    key : "item.playerBlack",
                    fn : function(sender) {
                        var item = sender.item;
                        return [_extends("v-chip", {
                            attrs : {
                                color : self.getColorPerc(item.playerBlackWinPercent)
                            }
                        }, [self._v(self._s(item.playerBlack) + "/" + self._s(item.playerBlackWins) + "\u00a0\u00a0\u00a0" + self._s(item.playerBlackWinPercent) + "%")])];
                    }
                }], null, false, 3098048137)
            })], 1) : self._e();
        };


        /** @type {!Array} */
        var GET_AUTH_URL_TIMEOUT = [];
        var strangth = $("0393");
        var params = {
            name : "PlayerStatistic",
            props : {
                playerStatisticsForDisplay : Array,
                players : Array
            },
            components : {
                ModelListSelect : strangth["ModelListSelect"]
            },
            data : function() {
                return {
                    currentSort : "name",
                    currentSortOrder : "asc",
                    selectedPlayerId : null,
                    selectedPlayerName : "",
                    statisticWithOtherPlayers : null,
                    items : [],
                    options : {},
                    headers : [{
                        text : "\u0418\u0433\u0440\u043e\u043a",
                        value : "name"
                    }, {
                        text : "\u0412\u043c\u0435\u0441\u0442\u0435 \u043a\u0440\u0430\u0441\u043d\u044b\u0435",
                        value : "bothRed"
                    }, {
                        text : "\u0412\u043c\u0435\u0441\u0442\u0435 \u0447\u0451\u0440\u043d\u044b\u0435",
                        value : "bothBlack"
                    }, {
                        text : "\u0420\u0430\u0437\u043d\u043e\u0446\u0432\u0435\u0442 (\u0438\u0433\u0440\u043e\u043a \u043a\u0440\u0430\u0441\u043d\u044b\u0439)",
                        value : "playerRed"
                    }, {
                        text : "\u0420\u0430\u0437\u043d\u043e\u0446\u0432\u0435\u0442 (\u0438\u0433\u0440\u043e\u043a \u0447\u0451\u0440\u043d\u044b\u0439)",
                        value : "playerBlack"
                    }]
                };
            },
            mounted : function() {
                this.selectedPlayerId = this.players[0].id;
            },
            watch : {
                selectedPlayerId : function(e) {
                    this.selectedPlayerName = this.getPlayerName(e);
                    this.statisticWithOtherPlayers = this.playerStatisticsForDisplay.find(function(elem) {
                        return elem.id === e;
                    }).withOtherPlayers;
                    this.updateTable();
                },
                options : {
                    handler : function() {
                        this.updateTable();
                    },
                    deep : true
                }
            },
            methods : {
                displayChip : function(properties, id) {
                    /** @type {string} */
                    var str = id + "WinPercent";
                    var size = this.getHighligting(properties[str], properties[id]);
                    return "none" != size;
                },
                getColorPerc : function(perc) {
                    var r, g, b = 0;
                    if(perc < 50) {
                        r = 255;
                        g = Math.round(5.1 * perc);
                    }
                    else {
                        g = 255;
                        r = Math.round(510 - 5.10 * perc);
                    }
                    var h = r * 0x10000 + g * 0x100 + b * 0x1;
                    return '#' + ('000000' + h.toString(16)).slice(-6);
                },
                getColor : function(s, id) {
                    /** @type {string} */
                    var str = id + "WinPercent";
                    return this.getHighligting(s[str], s[id]);
                },
                getHighligting : function(i, t) {
                    return 0 == t ? "none" : 100 == i ? "rgb(0, 255, 0)" : i > 60 ? "rgba(0, 255, 0, 0.5)" : 0 == i ? "rgb(255, 0, 0)" : "none";
                },
                updateTable : function() {
                    var self = this;
                    this.getData().then(function(data) {
                        self.items = data.items;
                    });
                },
                getData : function() {
                    var self = this;
                    return new Promise(function(resolve) {
                        var params = self.options;
                        var field = params.sortBy;
                        var match = params.sortDesc;
                        var result = self.statisticWithOtherPlayers.slice(0);
                        var diff = result.length;
                        if (void 0 == field || 1 === field.length && 1 === match.length || 0 === field.length) {
                            /** @type {string} */
                            var key = "name";
                            /** @type {boolean} */
                            var reason = false;
                            if (void 0 != field && 1 == field.length) {
                                key = field[0];
                                reason = match[0];
                            }
                            result = result.sort(function(expr, next) {
                                if (["bothRed", "bothBlack", "playerRed", "playerBlack"].includes(key)) {
                                    return self.percentSort(expr, next, key, reason);
                                }
                                var c = expr[key];
                                var f = next[key];
                                return reason ? c < f ? 1 : c > f ? -1 : 0 : c < f ? -1 : c > f ? 1 : 0;
                            });
                        }
                        resolve({
                            items : result,
                            total : diff
                        });
                    });
                },
                percentSort : function(lhs, rhs, property, text) {
                    /** @type {string} */
                    var RAW_ID = property + "WinPercent";
                    return lhs[RAW_ID] > rhs[RAW_ID] ? text ? -1 : 1 : lhs[RAW_ID] < rhs[RAW_ID] ? text ? 1 : -1 : lhs[property] > rhs[property] ? text ? -1 : 1 : lhs[property] < rhs[property] ? text ? 1 : -1 : 0;
                },
                getPlayerName : function(e) {
                    return this.players.find(function(elem) {
                        return elem.id === e;
                    }).name;
                }
            }
        };
        var newParams = params;
        var module = ($("2403"), Object(attributes["a"])(newParams, update, GET_AUTH_URL_TIMEOUT, false, null, null, null));
        var exports_ = module.exports;
        require()(module, {
            VChip : m["a"],
            VDataTable : j["a"]
        });
        /**
         * @return {?}
         */
        var then = function() {
            var self = this;
            var _h = self.$createElement;
            var wrap = self._self._c || _h;
            return wrap("v-data-table", {
                attrs : {
                    headers : self.headers,
                    items : self.playerStatisticsForDisplay,
                    "disable-pagination" : "",
                    "hide-default-footer" : "",
                    "must-sort" : "",
                    "sort-by" : "name"
                },
                scopedSlots : self._u([{
                    key : "item.box0",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[0] !== 0 ? Math.round((node.boxWins[0]*100)/node.box[0]) : 0)
                            }
                        }, [self._v(self._s(node.box[0]) + "/" + self._s(node.boxWins[0]))])];
                    }
                }, {
                    key : "item.box1",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[1] !== 0 ? Math.round((node.boxWins[1]*100)/node.box[1]) : 0)
                            }
                        }, [self._v(self._s(node.box[1]) + "/" + self._s(node.boxWins[1]))])];
                    }
                }, {
                    key : "item.box2",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[2] !== 0 ? Math.round((node.boxWins[2]*100)/node.box[2]) : 0)
                            }
                        }, [self._v(self._s(node.box[2]) + "/" + self._s(node.boxWins[2]))])];
                    }
                }, {
                    key : "item.box3",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[3] !== 0 ? Math.round((node.boxWins[3]*100)/node.box[3]) : 0)
                            }
                        }, [self._v(self._s(node.box[3]) + "/" + self._s(node.boxWins[3]))])];
                    }
                }, {
                    key : "item.box4",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[4] !== 0 ? Math.round((node.boxWins[4]*100)/node.box[4]) : 0)
                            }
                        }, [self._v(self._s(node.box[4]) + "/" + self._s(node.boxWins[4]))])];
                    }
                }, {
                    key : "item.box5",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[5] !== 0 ? Math.round((node.boxWins[5]*100)/node.box[5]) : 0)
                            }
                        }, [self._v(self._s(node.box[5]) + "/" + self._s(node.boxWins[5]))])];
                    }
                }, {
                    key : "item.box6",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[6] !== 0 ? Math.round((node.boxWins[6]*100)/node.box[6]) : 0)
                            }
                        }, [self._v(self._s(node.box[6]) + "/" + self._s(node.boxWins[6]))])];
                    }
                }, {
                    key : "item.box7",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[7] !== 0 ? Math.round((node.boxWins[7]*100)/node.box[7]) : 0)
                            }
                        }, [self._v(self._s(node.box[7]) + "/" + self._s(node.boxWins[7]))])];
                    }
                }, {
                    key : "item.box8",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[8] !== 0 ? Math.round((node.boxWins[8]*100)/node.box[8]) : 0)
                            }
                        }, [self._v(self._s(node.box[8]) + "/" + self._s(node.boxWins[8]))])];
                    }
                }, {
                    key : "item.box9",
                    fn : function(widget) {
                        var node = widget.item;
                        return [wrap("v-chip", {
                            attrs : {
                                color : self.getColorPerc(node.box[9] !== 0 ? Math.round((node.boxWins[9]*100)/node.box[9]) : 0)
                            }
                        }, [self._v(self._s(node.box[9]) + "/" + self._s(node.boxWins[9]))])];
                    }
                }])
            });
        };
        /** @type {!Array} */
        var startsWith = [];
        var Field = {
            name : "BoxStatistic",
            props : {
                playerStatisticsForDisplay : Array,
                players : Array
            },
            data : function() {
                return {
                    items : [],
                    options : {},
                    headers : [{
                        text : "\u0418\u0433\u0440\u043e\u043a",
                        value : "name"
                    }, {
                        text : "1 \u043d\u043e\u043c\u0435\u0440",
                        value : "box0",
                        sortable : false
                    }, {
                        text : "2 \u043d\u043e\u043c\u0435\u0440",
                        value : "box1",
                        sortable : false
                    }, {
                        text : "3 \u043d\u043e\u043c\u0435\u0440",
                        value : "box2",
                        sortable : false
                    }, {
                        text : "4 \u043d\u043e\u043c\u0435\u0440",
                        value : "box3",
                        sortable : false
                    }, {
                        text : "5 \u043d\u043e\u043c\u0435\u0440",
                        value : "box4",
                        sortable : false
                    }, {
                        text : "6 \u043d\u043e\u043c\u0435\u0440",
                        value : "box5",
                        sortable : false
                    }, {
                        text : "7 \u043d\u043e\u043c\u0435\u0440",
                        value : "box6",
                        sortable : false
                    }, {
                        text : "8 \u043d\u043e\u043c\u0435\u0440",
                        value : "box7",
                        sortable : false
                    }, {
                        text : "9 \u043d\u043e\u043c\u0435\u0440",
                        value : "box8",
                        sortable : false
                    }, {
                        text : "10 \u043d\u043e\u043c\u0435\u0440",
                        value : "box9",
                        sortable : false
                    }]
                };
            },
            methods : {
                displayChip : function(n, id) {
                    var val = this.getHighligting(n, id);
                    return "none" != val;
                },
                getColorPerc : function(perc) {
                    var r, g, b = 0;
                    if(perc < 50) {
                        r = 255;
                        g = Math.round(5.1 * perc);
                    }
                    else {
                        g = 255;
                        r = Math.round(510 - 5.10 * perc);
                    }
                    var h = r * 0x10000 + g * 0x100 + b * 0x1;
                    return '#' + ('000000' + h.toString(16)).slice(-6);
                },
                getColor : function(n, id) {
                    return this.getHighligting(n, id);
                },
                getHighligting : function(g, name) {
                    return 0 == g.box[name] ? "none" : g.boxWins[name] == g.box[name] ? "rgb(0, 255, 0)" : 100 * g.boxWins[name] / g.box[name] > 60 ? "rgba(0, 255, 0, 0.5)" : 0 == g.boxWins[name] ? "rgb(255, 0, 0)" : "none";
                }
            }
        };
        var componentName = Field;
        var that = Object(attributes["a"])(componentName, then, startsWith, false, null, null, null);
        var tooltip = that.exports;
        require()(that, {
            VChip : m["a"],
            VDataTable : j["a"]
        });
        var action = $("767f");
        var view1 = {
            name : "Statistics",
            components : {
                RoleStatistic : exported,
                PlayerStatistic : exports_,
                BoxStatistic : tooltip,
                GameStatistic : exportedGameResult
            },
            props : {},
            data : function() {
                return {
                    gamesCount : 0,
                    redWinsCount : 0,
                    blackWinsCount : 0,
                    gamesForRatingCount : 0,
                    ratingThreshold : .14,
                    currentSort : "name",
                    currentSortOrder : "asc",
                    database : null,
                    players : null,
                    ratingPlayers : null,
                    games : null,
                    playerStatistics : {},
                    playerStatisticsForDisplay : [],
                    playerStatisticsForDisplayRating : [],
                    headers : [{
                        text : "\u041c\u0435\u0441\u0442\u043e",
                        value : "name",
                        sortable : false
                    }, {
                        text : "\u0418\u0433\u0440\u043e\u043a",
                        value : "name",
                        sortable : false
                    }, {
                        text : "\u041e\u0447\u043a\u0438",
                        value : "relativePoints",
                    }, {
                        text : "\u0418\u0433\u0440",
                        value : "games",
                    }, {
                        text : "\u041f\u043e\u0431\u0435\u0434",
                        value : "wins"
                    }, {
                        text : "\u041f\u0435\u0440\u0432\u044b\u0439 \u0443\u0431\u0438\u0442\u044b\u0439",
                        value : "firstKilled",
                    }, {
                        text : "\u041b\u0443\u0447\u0448\u0438\u0439 \u0445\u043e\u0434",
                        value : "firstKilledGuessPoints",
                    }, {
                        text : "\u0418\u0433\u0440 \u0448\u0435\u0440\u0438\u0444\u043e\u043c",
                        value : "sherif",
                    }, {
                        text : "\u041f\u043e\u0431\u0435\u0434 \u0448\u0435\u0440\u0438\u0444\u043e\u043c",
                        value : "sherifWins",
                    }, {
                        text : "\u0418\u0433\u0440 \u043c\u0438\u0440\u043d\u044b\u043c",
                        value : "citizen",
                    }, {
                        text : "\u041f\u043e\u0431\u0435\u0434 \u043c\u0438\u0440\u043d\u044b\u043c",
                        value : "citizenWins",
                    }, {
                        text : "\u0418\u0433\u0440 \u0434\u043e\u043d\u043e\u043c",
                        value : "don"
                    }, {
                        text : "\u041f\u043e\u0431\u0435\u0434 \u0434\u043e\u043d\u043e\u043c",
                        value : "donWins"
                    }, {
                        text : "\u0418\u0433\u0440 \u043c\u0430\u0444\u043e\u043c",
                        value : "maf"
                    }, {
                        text : "\u041f\u043e\u0431\u0435\u0434 \u043c\u0430\u0444\u043e\u043c",
                        value : "mafWins"
                    }, {
                        text : "CI",
                        value : "ci"
                    }, {
                        text : "\u0414\u043E\u043F\u0020\u0431\u0430\u043B\u043B\u044B",
                        value : "additionalPoints",
                        sortable : false
                    }, {
                        text : "\u0411\u0430\u043b\u043b\u044b",
                        value : "absolutePoints",
                        sortable : false
                    }]
                };
            },
            mounted : function() {
                /**
                 * @return {?}
                 */
                function ItemLabelView() {
                    return oldSetupComputes.apply(this, arguments);
                }
                var oldSetupComputes = Object(attrs["a"])(regeneratorRuntime.mark(function start() {
                    var result;
                    var value;
                    var e;
                    var property;
                    var ajaxPostUrl;
                    var r;
                    var data;
                    return regeneratorRuntime.wrap(function(_context10) {
                        for (; 1;) {
                            switch(_context10.prev = _context10.next) {
                                case 0:
                                    0;
                                    /** @type {!Array<string>} */
                                    result = (new Date).toISOString().substr(0, 7).split("-");
                                    /** @type {string} */
                                    value = result[0];
                                    /** @type {string} */
                                    e = result[1];
                                case 4:
                                    return property = ("0" + e).slice(-2), ajaxPostUrl = "https://mafia-neft-club.github.io/statisticmafia/{month}-games.json".replace("{month}", value + "-" + property), _context10.next = 8, fetch(ajaxPostUrl);
                                case 8:
                                    if (r = _context10.sent, !r.ok) {
                                        /** @type {number} */
                                        _context10.next = 18;
                                        break;
                                    }
                                    return _context10.next = 12, r.json();
                                case 12:
                                    return data = _context10.sent, this.database = data, this.players = data.players, this.games = data.games, this.calculateStatistic(), _context10.abrupt("break", 22);
                                case 18:
                                    e--;
                                    if (0 == e) {
                                        /** @type {number} */
                                        e = 12;
                                        value--;
                                        if (2018 == value) {
                                            alert("\u0418\u0433\u0440\u044b \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u044b");
                                        }
                                    }
                                case 20:
                                    /** @type {number} */
                                    _context10.next = 4;
                                    break;
                                case 22:
                                    /** @type {number} */
                                    _context10.next = 28;
                                    break;
                                case 24:
                                    this.database = action;
                                    this.players = action.players;
                                    this.games = action.games;
                                    this.calculateStatistic();
                                case 28:
                                case "end":
                                    return _context10.stop();
                            }
                        }
                    }, start, this);
                }));
                return ItemLabelView;
            }(),
            methods : {
                customSort : function(b) {
                    var vm = this;
                    return b.sort(function(newBlend, mixer) {
                        var a = vm.currentSort;
                        return "desc" === vm.currentSortOrder ? newBlend[a] > mixer[a] ? -1 : newBlend[a] < mixer[a] ? 1 : 0 : newBlend[a] > mixer[a] ? 1 : newBlend[a] < mixer[a] ? -1 : 0;
                    });
                },
                getPlayerName : function(e) {
                    return this.players.find(function(elem) {
                        return elem.id === e;
                    }).name;
                },
                calculateStatistic : function() {
                    var common = this;
                    this.games.forEach(function(options) {
                        /** @type {!Array} */
                        var list = [];
                        options.players.forEach(function(value) {
                            list.push(common.getPlayerStatisticById(value));
                        });
                        /** @type {number} */
                        var name = 0;
                        for (; name < 10; name++) {
                            var item = list[name];

                            if(options.selectedPoints){
                                item.additionalPoints = Number((parseFloat(item.additionalPoints) + parseFloat(options.selectedPoints[name])).toFixed(2));
                            }

                            item.games++;
                            item.box[name]++;
                            if (common.playerWinGame(options, name)) {
                                item.wins++;
                                item.boxWins[name]++;
                            }
                            if (common.playerIsSherif(options, name)) {
                                item.sherif++;
                            }
                            if (common.playerIsSherifAndWin(options, name)) {
                                item.sherifWins++;
                            }
                            if (common.playerIsCitizen(options, name)) {
                                item.citizen++;
                            }
                            if (common.playerIsCitizenAndWin(options, name)) {
                                item.citizenWins++;
                            }
                            if (common.playerIsDon(options, name)) {
                                item.don++;
                            }
                            if (common.playerIsDonAndWin(options, name)) {
                                item.donWins++;
                            }
                            if (common.playerIsMaf(options, name)) {
                                item.maf++;
                            }
                            if (common.playerIsMafAndWin(options, name)) {
                                item.mafWins++;
                            }
                            if (common.firstKilled(options, name)) {
								if (!common.playerWinGame(options, name)) {
									item.firstKilledAndLose++;
								}
                                item.firstKilled++;
                                item.firstKilledGuessPoints += options.firstKilledGuessPoints;
                            }
                            /** @type {number} */
                            var key = 0;
                            for (; key < 10; key++) {
                                if (name !== key) {
                                    var preventQuestModal = common.getStatisticWithOtherPlayerById(item, options.players[key]);
                                    preventQuestModal.gamesTogether++;
                                    if (common.playerIsRed(options, name) && common.playerIsRed(options, key)) {
                                        preventQuestModal.bothRed++;
                                        if (options.cityWin) {
                                            preventQuestModal.bothRedWins++;
                                        }
                                    }
                                    if (common.playerIsBlack(options, name) && common.playerIsBlack(options, key)) {
                                        preventQuestModal.bothBlack++;
                                        if (!options.cityWin) {
                                            preventQuestModal.bothBlackWins++;
                                        }
                                    }
                                    if (common.playerIsRed(options, name) && common.playerIsBlack(options, key)) {
                                        preventQuestModal.playerRed++;
                                        if (options.cityWin) {
                                            preventQuestModal.playerRedWins++;
                                        }
                                    }
                                    if (common.playerIsBlack(options, name) && common.playerIsRed(options, key)) {
                                        preventQuestModal.playerBlack++;
                                        if (!options.cityWin) {
                                            preventQuestModal.playerBlackWins++;
                                        }
                                    }
                                }
                            }
                        }
                    });
                    /** @type {number} */
                    this.gamesForRatingCount = Math.round(this.games.length * this.ratingThreshold);
                    /** @type {!Array} */
                    this.ratingPlayers = [];
                    this.players.forEach(function(post) {
                        var item = common.getPlayerStatisticById(post.id);
                        /** @type {boolean} */
                        item.isRating = item.games >= common.gamesForRatingCount;
                        common.calculateCi(item);
                        common.calculatePoints(item);
                        item.sherifWinPercent = common.calculatePercent(item.sherifWins, item.sherif);
                        item.citizenWinPercent = common.calculatePercent(item.citizenWins, item.citizen);
                        item.donWinPercent = common.calculatePercent(item.donWins, item.don);
                        item.mafWinPercent = common.calculatePercent(item.mafWins, item.maf);
                        common.playerStatisticsForDisplay.push(item);
                        if (item.isRating) {
                            common.ratingPlayers.push(post);
                            common.playerStatisticsForDisplayRating.push(item);
                        }
                    });
                    this.players.forEach(function(speaker) {
                        var key = common.getPlayerStatisticById(speaker.id);
                        key.withOtherPlayers = common.calculateStatisticWithOtherPlayers(key);
                    });
                    this.ratingPlayers.sort(this.sortByNameFunction);
                    this.gamesCount = this.games.length;
                    this.redWinsCount = this.games.filter(function(canCreateDiscussions) {
                        return canCreateDiscussions.cityWin;
                    }).length;
                    this.blackWinsCount = this.games.filter(function(canCreateDiscussions) {
                        return !canCreateDiscussions.cityWin;
                    }).length;
                },
                calculateStatisticWithOtherPlayers : function(that) {
                    /** @type {!Array} */
                    var sharedBreakpointsVals = [];
                    var common = this;
                    return this.players.forEach(function(data) {
                        if (data.id != that.id) {
                            var controller = that.withOtherPlayers[data.id];
                            if (controller) {
                                var s = common.getPlayerStatisticById(data.id);
                                if (s.isRating) {
                                    controller.bothRedWinPercent = common.calculatePercent(controller.bothRedWins, controller.bothRed);
                                    controller.bothBlackWinPercent = common.calculatePercent(controller.bothBlackWins, controller.bothBlack);
                                    controller.playerRedWinPercent = common.calculatePercent(controller.playerRedWins, controller.playerRed);
                                    controller.playerBlackWinPercent = common.calculatePercent(controller.playerBlackWins, controller.playerBlack);
                                    sharedBreakpointsVals.push(controller);
                                }
                            }
                        }
                    }), sharedBreakpointsVals;
                },
                getPlayerStatisticById : function(id) {
                    var ret = this.playerStatistics[id];
                    return ret || (ret = {
                        id : id,
                        name : this.getPlayerName(id),
                        games : 0,
                        wins : 0,
                        sherif : 0,
                        sherifWins : 0,
                        sherifWinPercent : 0,
                        citizen : 0,
                        citizenWins : 0,
                        citizenWinPercent : 0,
                        don : 0,
                        donWins : 0,
                        donWinPercent : 0,
                        maf : 0,
                        mafWins : 0,
                        mafWinPercent : 0,
                        firstKilled : 0,
                        firstKilledAndLose : 0,
                        firstKilledGuessPoints : 0,
                        absolutePoints : 0,
                        relativePoints : 0,
                        additionalPoints : 0,
                        ci : 0,
                        box : Array(10).fill(0),
                        boxWins : Array(10).fill(0),
                        isRating : false,
                        withOtherPlayers : {}
                    }, this.playerStatistics[id] = ret), ret;
                },
                getStatisticWithOtherPlayerById : function(e, id) {
                    var match = e.withOtherPlayers[id];
                    return match || (match = {
                        id : id,
                        name : this.getPlayerName(id),
                        gamesTogether : 0,
                        bothRed : 0,
                        bothRedWins : 0,
                        bothRedWinPercent : 0,
                        bothBlack : 0,
                        bothBlackWins : 0,
                        bothBlackWinPercent : 0,
                        playerRed : 0,
                        playerRedWins : 0,
                        playerRedWinPercent : 0,
                        playerBlack : 0,
                        playerBlackWins : 0,
                        playerBlackWinPercent : 0
                    }, e.withOtherPlayers[id] = match), match;
                },
                playerWinGame : function(o, t) {
                    return o.don == t || o.maf1 == t || o.maf2 == t ? !o.cityWin : o.cityWin;
                },
                playerIsSherif : function(obj, index) {
                    return obj.sherif == index;
                },
                playerIsSherifAndWin : function(e, classname) {
                    return e.cityWin && this.playerIsSherif(e, classname);
                },
                playerIsCitizen : function(fn, type) {
                    return !(fn.don == type || fn.maf1 == type || fn.maf2 == type || fn.sherif == type);
                },
                playerIsCitizenAndWin : function(e, classname) {
                    return e.cityWin && this.playerIsCitizen(e, classname);
                },
                playerIsDon : function(o, t) {
                    return o.don == t;
                },
                playerIsDonAndWin : function(obsOrValue, cb) {
                    return !obsOrValue.cityWin && this.playerIsDon(obsOrValue, cb);
                },
                playerIsMaf : function(option, value) {
                    return option.maf1 == value || option.maf2 == value;
                },
                playerIsMafAndWin : function(input, nc) {
                    return !input.cityWin && this.playerIsMaf(input, nc);
                },
                firstKilled : function(o, t) {
                    return o.firstKilled == t;
                },
                calculatePoints : function(b) {
                    b.absolutePoints = (b.wins + b.firstKilledGuessPoints + (b.games !== 0 ? (b.firstKilledAndLose * (b.firstKilled / b.games)) : 0) + b.additionalPoints).toFixed(2);
                    /** @type {number} */
                    b.relativePoints = b.games !== 0 ? (100 * b.absolutePoints / b.games).toFixed(2) : 0;
                },
                playerIsBlack : function(o, t) {
                    return o.don == t || o.maf1 == t || o.maf2 == t;
                },
                playerIsRed : function(response, id) {
                    return !this.playerIsBlack(response, id);
                },
                calculatePercent : function(lost_time, total_time) {
                    return 0 == total_time ? 0 : Math.round(1E3 * lost_time / total_time) / 10;
                },
                sortByNameFunction : function(a, b) {
                    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
                },
                calculateCi : function(b) {
                    b.ci = (b.games !== 0 ? (b.firstKilledAndLose * (b.firstKilled / b.games)) : 0).toFixed(2);
                }
            }
        };
        var activeView = view1;
        var pkg = ($("d823"), Object(attributes["a"])(activeView, render, numKeysDeleted, false, null, null, null));
        var main = pkg.exports;
        require()(pkg, {
            VDataTable : j["a"]
        });
        var insertPage = {
            name : "app",
            components : {
                Statistics : main
            }
        };
        var wsFunction = insertPage;
        var __weex_module__ = ($("034f"), Object(attributes["a"])(wsFunction, Element, _maskLayer, false, null, null, null));
        var foreignExports = __weex_module__.exports;
        var value = $("43f9");
        var s = $.n(value);
        var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = ($("51de"), $("e094"), $("f309"));
        settings["default"].use(__WEBPACK_IMPORTED_MODULE_0_vue_router__["a"]);
        var i = new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a"]({
            icons : {
                iconfont : "mdi"
            }
        });
        settings["default"].use(s.a);
        /** @type {boolean} */
        settings["default"].config.productionTip = false;
        (new settings["default"]({
            vuetify : i,
            render : function(TextAdd) {
                return TextAdd(foreignExports);
            }
        })).$mount("#app");
    },
    "767f" : function(scope) {
        scope.exports = {
            formatVersion : 1,
            settings : {
                gamesMonth : "2019-08",
                maxPlayerId : 21,
                maxGameId : 4
            },
            games : [{
                id : 1,
                date : "2019-08-01",
                players : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                don : 7,
                maf1 : 0,
                maf2 : 5,
                sherif : 8,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 2,
                date : "2019-08-02",
                players : [6, 7, 11, 5, 12, 13, 14, 15, 16, 17],
                don : 0,
                maf1 : 6,
                maf2 : 7,
                sherif : 2,
                firstKilled : 8,
                firstKilledGuessPoints : 0,
                cityWin : true
            }, {
                id : 3,
                date : "2019-08-03",
                players : [7, 8, 5, 19, 18, 12, 2, 9, 4, 1],
                don : 9,
                maf1 : 8,
                maf2 : 3,
                sherif : 7,
                firstKilled : 0,
                firstKilledGuessPoints : .25,
                cityWin : false
            }, {
                id : 4,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 5,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 6,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 7,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 8,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 9,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 10,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }, {
                id : 11,
                date : "2019-08-04",
                players : [19, 7, 1, 12, 18, 9, 20, 13, 4, 5],
                don : 3,
                maf1 : 0,
                maf2 : 4,
                sherif : 1,
                firstKilled : 2,
                firstKilledGuessPoints : 0,
                cityWin : false
            }],
            players : [{
                id : 1,
                name : "\u0411\u0435\u0440\u043d\u0438\u043d\u0433",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0411\u0435\u0440\u043d\u0438\u043d\u0433",
                    date : 1565800124544
                }]
            }, {
                id : 2,
                name : "\u042d\u043c\u0438",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u042d\u043c\u0438",
                    date : 1565800132685
                }]
            }, {
                id : 3,
                name : "\u0410\u043b\u0438\u0441\u0430 (\u0431\u043b\u043e\u043d\u0434\u0438\u043d\u043a\u0430)",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0410\u043b\u0438\u0441\u0430 (\u0431\u043b\u043e\u043d\u0434\u0438\u043d\u043a\u0430)",
                    date : 1565800167452
                }]
            }, {
                id : 4,
                name : "\u0422\u0443\u0440\u0433\u0435\u043d\u0435\u0432",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0422\u0443\u0440\u0433\u0435\u043d\u0435\u0432",
                    date : 1565800220573
                }]
            }, {
                id : 5,
                name : "SOVEST",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "SOVEST",
                    date : 1565800234216
                }]
            }, {
                id : 6,
                name : "\u041c\u0430\u0441\u044f\u043d\u044f",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041c\u0430\u0441\u044f\u043d\u044f",
                    date : 1565800246415
                }]
            }, {
                id : 7,
                name : "\u041b\u0451\u043b\u0438\u043a",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041b\u0451\u043b\u0438\u043a",
                    date : 1565800263835
                }]
            }, {
                id : 8,
                name : "\u041a\u043b\u043e\u043d",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041a\u043b\u043e\u043d",
                    date : 1565800277351
                }]
            }, {
                id : 9,
                name : "\u0421\u043e\u0437\u0435\u0440\u0446\u0430\u044e\u0449\u0438\u0439",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0421\u043e\u0437\u0435\u0440\u0446\u0430\u044e\u0449\u0438\u0439",
                    date : 1565800287637
                }]
            }, {
                id : 10,
                name : "\u0414\u0443\u0442\u0447\u0435",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0414\u0443\u0442\u0447\u0435",
                    date : 1565800296750
                }]
            }, {
                id : 11,
                name : "\u0410\u043d\u0442\u043e\u043d\u043e\u0432\u043a\u0430",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0410\u043d\u0442\u043e\u043d\u043e\u0432\u043a\u0430",
                    date : 1565800788493
                }]
            }, {
                id : 12,
                name : "Bottcelli",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "Bottcelli",
                    date : 1565800816894
                }]
            }, {
                id : 13,
                name : "\u041c\u0435\u0434\u0432\u0435\u0434\u044c",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041c\u0435\u0434\u0432\u0435\u0434\u044c",
                    date : 1565800850521
                }]
            }, {
                id : 14,
                name : "\u0421\u0430\u043d\u0442\u043e\u0441",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0421\u0430\u043d\u0442\u043e\u0441",
                    date : 1565800869034
                }]
            }, {
                id : 15,
                name : "\u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u0412\u0438\u043b\u044c\u0433\u0435\u043b\u044c\u043c",
                    date : 1565800888773
                }]
            }, {
                id : 16,
                name : "\u041c\u0430\u0441\u0442\u0435\u0440",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041c\u0430\u0441\u0442\u0435\u0440",
                    date : 1565800898960
                }]
            }, {
                id : 17,
                name : "\u041a\u043e\u0442",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041a\u043e\u0442",
                    date : 1565800906540
                }]
            }, {
                id : 18,
                name : "\u0422\u0435\u0442\u0447\u0435\u0440",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041f\u0438\u043b\u0430",
                    date : 1565801287035
                }, {
                    nameChangeId : 2,
                    name : "\u0422\u0435\u0442\u0447\u0435\u0440",
                    date : 1565801295607
                }]
            }, {
                id : 19,
                name : "\u041d\u0435\u043e",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041f\u0438\u043b\u0430",
                    date : 1565801572931
                }, {
                    nameChangeId : 2,
                    name : "\u041d\u0435\u043e",
                    date : 1565801701045
                }]
            }, {
                id : 20,
                name : "\u041f\u0438\u043b\u0430",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041f\u0438\u043b\u0430",
                    date : 1565801817647
                }]
            }, {
                id : 21,
                name : "\u041b\u0435\u0433\u0438\u043e\u043d",
                nameHistory : [{
                    nameChangeId : 1,
                    name : "\u041b\u0435\u0433\u0438\u043e\u043d",
                    date : 1565801817647
                }]
            }]
        };
    },
    "7de0" : function(branchData, beforeZero, afterZero) {
    },
    d823 : function(srcVersion, runtime, __webpack_require__) {
        var __WEBPACK_IMPORTED_MODULE_1_jsmidgen__ = __webpack_require__("f949");
        var clonedI = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsmidgen__);
        clonedI.a;
    },
    f949 : function(branchData, beforeZero, afterZero) {
    }
});
