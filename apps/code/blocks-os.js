var BASE_OS_HELP_URL_ = BlocklyLua.BASE_HELP_URL + 'Os.';
OS_BLOCK_COLOR_ = 30;

Blockly.Blocks['os_terminate'] = {
  // Terminate program with error message.
  init: function() {
    this.setColour(OS_BLOCK_COLOR_);
    this.interpolateMsg('terminate',
                        ['MSG', null, Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('End the program with the provided error message.  ' +
        'This should not be used for normal termination.');
    // This has a previous, but not a following, statement.
    this.setPreviousStatement(true);
  }
};

Blockly.Lua['os_terminate'] = function(block) {
  // Generate Lua for terminating program with error message.
  var message = Blockly.Lua.valueToCode(block, 'MSG',
      Blockly.Lua.ORDER_NONE) || '"error"';
  return 'error(' + message + ')\n';
};


Blockly.Blocks['os_sleep'] = {
  // Sleep for the specified number of seconds.
  init: function() {
    this.setColour(OS_BLOCK_COLOR_);
    this.interpolateMsg('sleep %1 seconds',
                        ['VALUE', 'Number', Blockly.ALIGN_RIGHT],
                        Blockly.ALIGN_RIGHT);
    this.setTooltip('Sleep for the specified number of seconds.')
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setHelpUrl(BASE_OS_HELP_URL_ + 'sleep');
  }
};

Blockly.Lua['os_sleep'] = function(block) {
  // Generate Lua for sleeping the specified number of seconds.
  var argument0 = Blockly.Lua.valueToCode(block, 'VALUE',
      Blockly.Lua.ORDER_NONE) || '1';
  return 'sleep(' + argument0 + ')\n';
};
