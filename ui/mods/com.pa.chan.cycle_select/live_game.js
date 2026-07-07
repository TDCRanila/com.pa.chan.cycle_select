(function() 
{
    var current_selection_unit_type_keys = [];
    var current_selection_unit_types = [];
    const CYCLE_INDEX_DEFAULT_VALUE = -1;
    var current_cycle_index = CYCLE_INDEX_DEFAULT_VALUE;
    var should_prevent_selection_state_reset = false;

    var reset_selection_state = function()
    {
        current_selection_unit_type_keys = [];
        current_selection_unit_types = [];
        current_cycle_index = CYCLE_INDEX_DEFAULT_VALUE;
    };

    function math_modulo(a_n, a_m) 
    {
        return ((a_n % a_m) + a_m) % a_m;
    }

    var increment_cycle_index = function()
    {
        current_cycle_index = math_modulo((current_cycle_index + 1), current_selection_unit_type_keys.length);
    }

    var decrement_cycle_index = function()
    {
        current_cycle_index = math_modulo((current_cycle_index - 1), current_selection_unit_type_keys.length);
    }

    var game_select_types_in_current_selection = function(a_index)
    {
        const unit_type_key = current_selection_unit_type_keys[a_index];
        const units_result = current_selection_unit_types[unit_type_key];
        
        engine.call('select.byIds', units_result);

        return true;
    }

    model.cycle_forward_through_current_selection = function() 
    {
        if (current_selection_unit_type_keys.length <= 1)
        {
            // console.log("CycleSelect; INFO - Single Unit type select, no need to cycle (forward) between unit types.");
            return;
        }

        increment_cycle_index();
        
        game_select_types_in_current_selection(current_cycle_index);
        
        should_prevent_selection_state_reset = true;
    };

    model.cycle_backwards_through_current_selection = function() 
    {
        if (current_selection_unit_type_keys.length <= 1)
        {
            // console.log("CycleSelect; INFO - Single Unit type select, no need to cycle (backwards) between unit types.");
            return;
        }

        const is_first_cycle_after_selection = (current_cycle_index == CYCLE_INDEX_DEFAULT_VALUE);
        if (is_first_cycle_after_selection)
        {
            current_cycle_index = 0;
        }
        
        decrement_cycle_index();
        
        game_select_types_in_current_selection(current_cycle_index);
        
        should_prevent_selection_state_reset = true;
    };

    model.selection_subscriber = function(a_payload) 
    {
        if (a_payload && model.mode() != 'select') 
        {
            if (!should_prevent_selection_state_reset)
            {
                reset_selection_state();
                
                if (!a_payload.spec_ids)
                {
                    console.log("CycleSelect; ERROR - An attempt to select units, but no types received.")
                    return;
                }
                
                current_selection_unit_type_keys = Object.keys(a_payload.spec_ids);;
                current_selection_unit_types = a_payload.spec_ids;
                
            }

            should_prevent_selection_state_reset = false;
        }
    };

    model.selection.subscribe(model.selection_subscriber);

})();
