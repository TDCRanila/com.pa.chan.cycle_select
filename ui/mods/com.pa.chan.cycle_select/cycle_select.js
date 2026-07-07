(function() 
{
    var hotkey_set_name = 'gameplay';
    var hotkey_display_sub_group_name = 'Cycle Select';

    {
        var hotkey_id_cycle_select_forward = 'cycle_forward_through_current_selection';

        action_sets[hotkey_set_name][hotkey_id_cycle_select_forward] = function () 
        {
            if (model[hotkey_id_cycle_select_forward]) 
            {
                model[hotkey_id_cycle_select_forward].apply(this, arguments);
            }
        };

        api.settings.definitions.keyboard.settings.cycle_forward_through_current_selection = 
        {
            title: 'Cycle Forward Through Current Selection',
            type: 'keybind',
            set: hotkey_set_name,
            display_group: 'mods',
            display_sub_group: hotkey_display_sub_group_name,
            default: ''
        };
    }

    {
        var hotkey_id_cycle_select_backwards = 'cycle_backwards_through_current_selection';

        action_sets[hotkey_set_name][hotkey_id_cycle_select_backwards] = function () 
        {
            if (model[hotkey_id_cycle_select_backwards]) 
            {
                model[hotkey_id_cycle_select_backwards].apply(this, arguments);
            }
        };

        api.settings.definitions.keyboard.settings.cycle_backwards_through_current_selection = 
        {
            title: 'Cycle Backwards Through Current Selection',
            type: 'keybind',
            set: hotkey_set_name,
            display_group: 'mods',
            display_sub_group: hotkey_display_sub_group_name,
            default: ''
        };
    }

    api.Panel.message('', 'inputmap.reload');

})();
