(function() 
{
    var current_selection_unit_type_keys = [];
    var current_selection_unit_types = [];
    var current_cycle_index = 0;
    var should_prevent_selection_state_reset = false;

    var reset_selection_state = function()
    {
        current_selection_unit_type_keys = [];
        current_selection_unit_types = [];
        current_cycle_index = 0;
    };

    var increment_cycle_index = function()
    {
        current_cycle_index = (current_cycle_index + 1) % current_selection_unit_type_keys.length
    }

    model.cycle_through_current_selection = function() 
    {  
        if (current_selection_unit_type_keys.length <= 1)
        {
            // console.log("CycleSelect; INFO - Single Unit type select, no need to cycle between unit types.");
            return;
        }

        var unit_type_key = current_selection_unit_type_keys[current_cycle_index];
        var units_result = current_selection_unit_types[unit_type_key];
        
        engine.call('select.byIds', units_result);
        
        increment_cycle_index();

        should_prevent_selection_state_reset = true;

    };

    model.selection_subscriber = function(payload) 
    {
        if (payload && model.mode() != 'select') 
        {
            if (!should_prevent_selection_state_reset)
            {
                reset_selection_state();
                
                if (!payload.spec_ids)
                {
                    console.log("CycleSelect; ERROR - An attempt to select units, but no types received.")
                    return;
                }
                
                current_selection_unit_type_keys = Object.keys(payload.spec_ids);;
                current_selection_unit_types = payload.spec_ids;
                
            }

            should_prevent_selection_state_reset = false;
        }
    };

    model.selection.subscribe(model.selection_subscriber);

})();
