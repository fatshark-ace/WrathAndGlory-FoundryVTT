export default class RuinGloryCounter extends Application {
    static get defaultOptions() {
      const options = super.defaultOptions;
      options.id = 'counter';
      options.template = 'systems/wrath-and-glory/template/apps/counter.html';
      options.width = 'auto';
      options.height = 300;
      options.popOut = false;
      return options;
    }
    /* -------------------------------------------- */
    /**
     * Provide data to the HTML template for rendering
     * @type {Object}
     */
    getData() {
      const data = super.getData();
      data.glory = game.settings.get('wrath-and-glory', 'glory');
      data.ruin = game.settings.get('wrath-and-glory', 'ruin');
      data.canEdit =
        game.user.isGM || game.settings.get('wrath-and-glory', 'playerCounterEdit');
  
      return data;
    }
  
    activateListeners(html) {
      super.activateListeners(html);
  
      html.find('input').focusin(ev => {
        ev.target.select()
      })
      // Call setCounter when input is used
      this.input = html.find('input').change(async ev => {
        const type = $(ev.currentTarget).attr('data-type');
        RuinGloryCounter.setCounter(ev.target.value, type);
      });
  
      // Call changeCounter when +/- is used
      html.find('.incr,.decr').mousedown(async ev => {
        let input = $(ev.target.parentElement).find("input")
        const type = input.attr('data-type');
        const multiplier = $(ev.currentTarget).hasClass('incr') ? 1 : -1;
        $(ev.currentTarget).toggleClass("clicked")
        let newValue = await RuinGloryCounter.changeCounter(1 * multiplier, type);
        input[0].value = newValue
      });
  
      html.find('.incr,.decr').mouseup(ev => {
        $(ev.currentTarget).removeClass("clicked")
      });
    }
  
    // ************************* STATIC FUNCTIONS ***************************
  
    /**
     * Set the counter of (type) to (value)
     * @param value Value to set counter to
     * @param type  Type of counter, "momentum" or "doom"
     */
    static async setCounter(value, type) {
      value = Math.round(value);
  
      if (!game.user.isGM) {
        game.socket.emit('system.wrath-and-glory', {
          type: 'setCounter',
          payload: {value, type},
        });
      }
      else
      {
        await game.settings.set('wrath-and-glory', type, value);
      }
  
      // Emit socket event for users to rerender their counters
      game.socket.emit('system.wrath-and-glory', {type: 'updateCounter'});
  
      return value
    }
  
    /**
     * Change the counter of (type) by (value)
     * @param diff How much to change the counter
     * @param type  Type of counter, "momentum" or "doom"
     */
    static async changeCounter(diff, type) {
      let value = game.settings.get('wrath-and-glory', type);
      return await RuinGloryCounter.setCounter(value + diff, type)
    }
  
  }
